// composables/useZodForm.ts
import { ref, watch } from 'vue'
import type { ZodObject, ZodRawShape } from 'zod'
import { toValue } from 'vue'

export function useZodForm<T extends ZodRawShape>(
  schema: ZodObject<T>,
  form: Record<keyof T, any>
) {
  const errors = ref<Record<keyof T, string | null>>({} as any)
  const isSuspended = ref(false)

  for (const key in form) {
    watch(() => form[key], (value) => {
      if (isSuspended.value) return

      const fieldSchema = schema.shape[key]
      const result = fieldSchema.safeParse(value)
      errors.value[key] = result.success ? null : result.error.issues[0].message
    })
  }

  const validate = () => {
    const parsed = schema.safeParse(toValue(form))
    if (!parsed.success) {
      parsed.error.issues.forEach(issue => {
        const key = issue.path[0] as keyof T
        errors.value[key] = issue.message
      })
    }
    return parsed
  }

  const resetForm = (initialValue: Partial<Record<keyof T, any>> = {}) => {
    isSuspended.value = true
    for (const key in form) {
      form[key] = initialValue[key] ?? ''
      errors.value[key] = null
    }
    nextTick(() => {
      isSuspended.value = false
    })
  }

  return { errors, validate, resetForm }
}
