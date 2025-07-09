<template>
    <NuxtLayout>
        <template #content>
            <TitleSection class="text-4xl">Daftar Event</TitleSection>
            <div>
                <h2 class="text-2xl">Event Terbaru</h2>
                <h3 class="text-lg">100+ Umkm telah bergabung </h3>
            </div>
            <div class="flex flex-wrap gap-6">
                <CardEvent :event="event" v-for="event in events"/>
            </div>
            <div>
                <InputCustom label="Search" type="text" id="search" placeholder="search..." v-model="search"/>
            </div>
            <!-- Daftar Event -->
            <div class="flex flex-wrap gap-6">
                <CardEvent :event="event" v-for="event in events"/>
            </div>
        </template>
    </NuxtLayout>
</template>

<script setup lang="ts">
const search = ref('')

const events = [
    {
        name : 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima, vitae!',
        date : '10 juni 2025',
        quota : 100
    },
    {
        name : 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima, vitae!',
        date : '10 juni 2025',
        quota : 100
    },
    {
        name : 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima, vitae!',
        date : '10 juni 2025',
        quota : 100
    },
    {
        name : 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima, vitae!',
        date : '10 juni 2025',
        quota : 100
    },
]
</script>
