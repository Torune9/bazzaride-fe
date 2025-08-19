<template>
    <div class="grid w-full gap-2 rounded-xl overflow-hidden shadow-lg">
        <div class="w-full h-40">
            <img :src="data.image ? data.image : 'https://placehold.co/400x600'" alt="profile-img"
                class="h-full w-full object-cover">
        </div>
        <div class="w-full space-y-4 p-4">
            <h1 class="text-2xl font-medium">
                {{ data.name }}
            </h1>
            <div class="flex flex-row">
                <p class="line-clamp-1">
                    {{ data.description }}
                </p>
                <CtaBtn class="w-14 h-14 flex items-center justify-center shrink-0" rounded="full">
                    <Icon name="heroicons:arrow-right-16-solid" style="font-size: 24px;" class="-rotate-45" />
                </CtaBtn>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps < {
    data: Object
} > ()
</script>
