<template>
  <div>
    <div class="text-2xl">{{ value }}</div>
    <div class="text-sm text-gray-600">{{ label }}</div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  value: string | number
  label: string
}>()
</script>
