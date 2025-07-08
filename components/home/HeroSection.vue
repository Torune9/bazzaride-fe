<script setup lang="ts">
</script>

<template>
    <section>
        <div class="flex flex-row min-h-[500px] gap-y-10 justify-center items-center">
            <div class="flex flex-col gap-y-4">
                <TitleSection class="text-4xl lg:text-6xl">Temukan Event &<br> Bazar UMKM Terdekat!</TitleSection>
                <p class="text-sm/relaxed font-medium md:text-lg">
                    Satu tempat untuk temukan dan dukung UMKM lokal melalui event & bazar seru di kotamu. Temui
                    produk-produk
                    unik, kuliner khas, dan peluang kolaborasi – semuanya dalam satu platform!
                </p>
                <CtaBtn rounded="full" class="w-56">
                    Gabung Sekarang
                </CtaBtn>
                <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-10">
                    <StatItem value="110+" label="Event" />
                    <StatItem value="200+" label="Anggota" />
                    <StatItem value="10+" label="On air" />
                    <StatItem value="400+" label="Event berhasil" />
                </div>
            </div>
            <div class="max-lg:hidden w-full h-full flex justify-end items-center">
                <div class="w-96 h-96 rounded-full bg-blue-500"></div>
            </div>
        </div>
    </section>
</template>
