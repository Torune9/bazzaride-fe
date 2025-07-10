<template>
  <div class="w-full h-64">
    <img :src="src" alt="event-image" class="w-full h-full object-cover" />
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  src: string;
}>();
</script>
