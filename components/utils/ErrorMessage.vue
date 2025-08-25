<template>
    <p class="text-red-700 text-center">
        {{ message }}
    </p>
</template>

<script setup lang="ts">
const props = defineProps<{
    message?: string
}>()
</script>
