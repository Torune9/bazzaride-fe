<template>
    <div class="w-screen min-h-screen flex flex-col justify-center font-inter px-10 gap-y-8 lg:px-40">
        <h1 class="text-2xl w-full">
            Sebelum melanjutkan,<br>silahkan pilih peran anda
        </h1>
        <Wrapper class="flex flex-col justify-center">
            <div class="flex flex-col gap-6 sm:flex-row">
                <Radio id="participant" v-model:role="roleOps" :value="1">
                    <Box class="grid grid-cols-[auto_1fr] grid-rows-2 items-center gap-2">
                        <div class="h-20 w-20 group-hover:scale-125 transition bg-white rounded-full">
                            <img :src="man" alt="image-role" class="w-full h-full object-cover">
                        </div>
                        <h1 class="text-4xl font-semibold">
                            Participant
                        </h1>
                        <p class="col-span-2 text-lg">
                            Temukan berbagai event bazaar menarik di sekitar Anda.
                        </p>
                    </Box>
                </Radio>
                <Radio id="manager" v-model:role="roleOps" :value="2" bg="bg-torqouise-retro">
                    <Box class="grid grid-cols-[auto_1fr] grid-rows-2 items-center gap-2">
                        <div class="h-20 w-20 group-hover:scale-125 transition bg-white rounded-full">
                            <img :src="manager" ager alt="image-role" class="w-full h-full object-cover">
                        </div>
                        <h1 class="text-4xl font-semibold">
                            Organizer
                        </h1>
                        <p class="col-span-2 text-lg">
                            Upload dan kelola event bazaar Anda.
                        </p>
                    </Box>
                </Radio>
            </div>
        </Wrapper>
        <div class="text-end" v-if="roleOps">
            <CtaBtn class="w-42" rounded="xl">
                Lanjut
            </CtaBtn>
        </div>
    </div>
</template>

<script setup lang="ts">
import man from '@/assets/images/man.png'
import manager from '@/assets/images/manager.png'
definePageMeta({
    layout: false
})

const roleOps = ref(0)

</script>
