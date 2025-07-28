<template>
  <div class="w-full flex flex-col gap-y-2">
    <label :for="id" class="font-medium block mb-1">
      {{ label }}
    </label>
    <input
      :id="id"
      :type="type"
      :placeholder="placeholder"
      class="border p-2 focus:outline-none hover:border hover:border-torqouise-retro focus:border-yellow-retro transition-colors duration-300"
      :class="sizeClass ? sizeClass : 'rounded-md'"
      v-model="inputValue"
    />
    <small class="text-red-600 flex items-center" v-if="errorMessage">
      <Icon name="heroicons:information-circle" style="margin-right: 2px; font-size: 1.2rem;"/>{{ errorMessage }}
    </small>
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
  errorMessage? : string
}>();

const emit = defineEmits(["update:modelValue"]);

const inputValue = computed({
  get: () => props.modelValue,
  set: (val) => emit("update:modelValue", val),
});
</script>
