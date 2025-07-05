<template>
    <div class="flex flex-row justify-between border p-4 items-center max-lg:relative lg:p-2">
        <h1 class="text-2xl">
            Bazzaride
        </h1>
        <BurgerBtn v-model:open-dropdown="isOpen" class="z-10"/>
        <div class="absolute top-full right-0 z-0 text-lg lg:static lg:w-full">
            <div class="flex flex-col gap-y-2 bg-white p-2 transition-all items-center lg:opacity-100 lg:-translate-y-0 lg:flex-row lg:justify-evenly lg:transition-none " :class="isOpen ? 'translate-0 opacity-100' : '-translate-y-10 opacity-0'">
                <ul class="max-lg:my-1 max-lg:space-y-2 lg:w-full lg:inline-flex lg:gap-x-8 lg:items-center lg:pl-64 box-border">
                    <li>Event</li>
                    <li>Participant</li>
                </ul>
                <button class="rounded cursor-pointer p-2 bg-slate-100">Masuk</button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const isOpen = ref(false)
</script>
