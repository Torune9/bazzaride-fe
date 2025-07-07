<template>
  <div class="w-full">
    <label :for="id" class="text-sm font-light block mb-1">
      {{ label }}
    </label>
    <input
      :id="id"
      :type="type"
      :placeholder="placeholder"
      class="w-full h-10 border rounded-md p-2"
      v-model="inputValue"
    />
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  modelValue: string | number;
  label: string;
  id?: string;
  type?: string;
  name?: string;
  placeholder?: string;
}>();

const emit = defineEmits(["update:modelValue"]);

const inputValue = computed({
  get: () => props.modelValue,
  set: (val) => emit("update:modelValue", val),
});
</script>
