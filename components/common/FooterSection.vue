<template>
    <div class="grid grid-cols-2 gap-y-8 gap-x-6">
        <div class="col-span-2 lg:col-span-1">
            <TitleSection class="text-4xl lg:text-6xl">
                Mendukung UMKM,<br>
                Membangun Komunitas.
            </TitleSection>
        </div>
        <ul  class="space-y-2 lg:text-xl">
            <li v-for="menu in menus">
                <p>{{ menu.name }}</p>
            </li>
        </ul>
       <div class="lg:text-xl lg:col-start-2 lg:row-start-1 flex justify-end">
         <ul class="flex flex-col gap-y-4">
            <li class="md:text-2xl font-semibold">Kontak kami</li>
            <li v-for="contact in contacts">
                <div class="space-x-2">
                    <span><Icon :name="contact.icon" style="color: black" /></span>
                    <span>{{ contact.value }}</span>
                </div>
            </li>
        </ul>
       </div>
    </div>
</template>

<script setup lang="ts">
const menus: { name: string, url: string }[] = [
    {
        name: 'Beranda',
        url: ''
    },
    {
        name: 'Event',
        url: ''
    },
    {
        name: 'Tentang Kami',
        url: ''
    },
    {
        name: 'Kebijakan dan privasi',
        url: ''
    },
]
const contacts: { icon: string, value: string }[] = [
    {
        icon: 'uil:instagram',
        value: 'bazzaride.id'
    },
    {
        icon: 'uil:phone',
        value: '+62 888-666-98211'
    },
    {
        icon: 'uil:envelope',
        value: 'bazzar.id@mail.com'
    },

]
</script>
