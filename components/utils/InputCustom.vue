<template>
  <div class="w-full flex flex-col gap-y-2">
    <label :for="id" class="font-medium block mb-1">
      {{ label }}
    </label>
    <input
      :id="id"
      :type="type"
      :placeholder="placeholder"
      class="border p-2 rounded-md focus:outline-none hover:border hover:border-torqouise-retro focus:border-yellow-retro transition-colors duration-300"
      :class="sizeClass ? sizeClass : ' '"
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
  sizeClass?: string;
}>();

const emit = defineEmits(["update:modelValue"]);

const inputValue = computed({
  get: () => props.modelValue,
  set: (val) => emit("update:modelValue", val),
});
</script>
