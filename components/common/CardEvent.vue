<template>
    <div class="flex flex-col w-full h-full shrink-0 shadow-lg overflow-hidden rounded-md">
        <EventImage src="https://placehold.co/400x800" />
        <div class="grid grid-cols-[1fr_auto] grid-rows-2 items-center p-4 gap-2">
            <h1 class="text-lg font-medium line-clamp-1">{{ event.name }}</h1>
            <small class="text-end lg:text-sm">{{ event.date }}</small>
            <small class="lg:text-sm">Kuota : {{ event.quota }}</small>
            <NuxtLink :to="`/events/${event.id}`">
                <button
                    class="rounded-full p-2 cursor-pointer h-10 w-10 lg:h-12 lg:w-12 flex justify-center items-center justify-self-end bg-torqouise-retro hover:bg-green-600 transition-colors duration-300">
                    <Icon name="heroicons:arrow-right-16-solid"
                        style="font-size: 2em; color: #fff; transform: rotate(-25deg);" />
                </button>
            </NuxtLink>
        </div>
        <div class="w-full" v-if="event.category">
            <h3 class="text-white w-max px-10 py-1 bg-purple-retro rounded-tr-full">{{ event.category.name }}</h3>
        </div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{
    event: {
        id: string,
        name: string,
        date: string,
        quota?: number
        category?: {
            name: string,
            id: string,
        }
    };
}>();

const { truncate } = useTruncText();
</script>
