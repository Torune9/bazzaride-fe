<template>
    <div class="flex flex-row justify-between p-4 items-center max-lg:relative md:px-16">
        <h1 class="text-2xl font-semibold">
            Bazzaride
        </h1>
        <BurgerBtn v-model:open-dropdown="isOpen" class="z-10" />
        <div class="absolute top-full right-0 z-0 text-lg lg:static lg:w-full">
            <div class="flex flex-col gap-y-2 max-lg:bg-white max-lg:w-36 p-2 box-border transition-all items-center lg:opacity-100 lg:-translate-y-0 lg:flex-row lg:justify-evenly lg:transition-none max-lg:shadow-xl rounded-md"
                :class="isOpen ? 'translate-0 opacity-100' : '-translate-y-10 opacity-0'">
                <ul
                    class="w-full max-lg:my-1 max-lg:space-y-2 lg:w-full lg:inline-flex lg:gap-x-8 lg:items-center lg:pl-64 box-border">
                    <li>
                        <NuxtLink to="/events">
                            Event
                        </NuxtLink>
                    </li>
                    <li>
                         <NuxtLink to="/participants">
                            Participants
                        </NuxtLink>
                    </li>
                </ul>
                <NuxtLink
                    class="max-lg:w-full rounded-full text-sm cursor-pointer p-2 px-4 bg-torqouise-retro text-white text-center hover:bg-emerald-300 transition-colors duration-300"
                    to="/auth/login">
                    Masuk
                </NuxtLink>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const isOpen = ref(false)
</script>
