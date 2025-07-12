<template>
    <div class="grid gap-5 lg:gap-20 lg:grid-cols-[1fr_400px]">
        <div class="space-y-2 lg:order-2 flex flex-col justify-center lg:space-y-6">
            <h2 class="font-medium text-3xl sm:text-4xl lg:text-6xl/tight">
                Event <br class="hidden lg:block"> Terbaru
            </h2>
            <h3 class="text-lg sm:text-2xl">
                100+ UMKM telah bergabung
            </h3>
        </div>
        <div class="grid gap-6 sm:grid-cols-2 lg:order-1">
            <CardEvent :event="event" v-for="event in newEst" />
        </div>
    </div>
    <TitleSection class="text-4xl">Daftar Event</TitleSection>
    <div>
        <InputCustom label="Search Event" type="text" id="search" placeholder="search..." v-model="search" />
    </div>
    <!-- Daftar Event -->
    <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <CardEvent :event="event" v-for="event in events" />
    </div>
</template>

<script setup lang="ts">
const search = ref("");
const events = [
    {
        id: '1',
        name:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima, vitae!",
        quota: 100,
        category: 'food',
        date: "10 juni 2025",
    },
    {
        id: '2',
        name:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima, vitae!",
        quota: 100,
        category: 'food',
        date: "10 juni 2025",
    },
    {
        id: '3',
        name:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima, vitae!",
        quota: 100,
        category: 'food',
        date: "10 juni 2025",
    },
    {
        id: '4',
        name:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima, vitae!",
        quota: 100,
        category: 'food',
        date: "10 juni 2025",
    },
];
const newEst = events.slice(0, 2);

</script>
