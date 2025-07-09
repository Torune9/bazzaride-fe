<template>
    <div class="flex flex-col gap-y-4 w-full h-full shrink-0 shadow-lg">
        <EventImage src="https://placehold.co/400x800" />
        <div class="grid grid-cols-[1fr_auto] grid-rows-2 items-center p-4">
            <h1 class="text-lg font-medium">{{ truncate(event.name, 5) }}</h1>
            <small class="text-end">{{ event.date }}</small>
            <small class="">Kuota : {{ event.quota }}</small>
            <button
                class="rounded-full p-2 cursor-pointer h-10 w-10 flex justify-center items-center justify-self-end bg-torqouise-retro">
                <Icon name="uil:arrow-right" style="font-size: 2em; color: #fff;" />
            </button>
        </div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{
    event: {
        name: string,
        date: string,
        quota?: number,
    }
}>()

const { truncate } = useTruncText()
</script>
