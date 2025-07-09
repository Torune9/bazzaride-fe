<template>
  <button
    :form="form"
    type="submit"
    :disabled="loading"
    class="inline-flex font-inter items-center gap-x-2 p-2 px-2 border rounded-md bg-blue-500 text-white cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
  >
    <Icon
      :name="loading ? 'line-md:loading-twotone-loop' : 'uil:edit'"
      class="{{ loading ? 'animate-spin' : '' }}"
    />
    <span class="text-sm">
      {{ loading ? "Loading..." : mode === "edit" ? ` ${title}` : ` ${title}` }}
    </span>
  </button>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
  form?: string;
  mode: "edit" | "create";
  loading?: boolean;
}>();
</script>
