// composables/useZodForm.ts
import { ref, watch } from 'vue'
import type { ZodObject, ZodRawShape } from 'zod'
import { toValue } from 'vue'

export function useZodForm<T extends ZodRawShape>(
  schema: ZodObject<T>,
  form: Record<keyof T, any>
) {
  const errors = ref<Record<keyof T, string | null>>({} as any)

  for (const key in form) {
    watch(() => form[key], (value) => {
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

  return { errors, validate }
}
