<template>
    <Wrapper class="flex flex-col gap-y-4">
        <div class="h-48 sm:h-80 rounded-md overflow-hidden">
            <NuxtImg :src="data.image" class="w-full h-full object-cover" />
        </div>
        <h1 class="text-2xl">{{ data.name }}</h1>
        <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque cum possimus mollitia accusantium tempora?
            In corporis eveniet eos magnam illo?
        </p>

        <BaseBtn class="border hover:bg-yellow-retro transition-colors duration-300 sm:w-48">
            Update
        </BaseBtn>
    </Wrapper>
</template>

<script setup lang="ts">
const props = defineProps<{
    data: Object
}>()
</script>
