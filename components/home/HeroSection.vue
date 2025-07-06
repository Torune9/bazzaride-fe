<template>
    <div class="flex flex-col h-[500px] gap-y-10 justify-center p-4">
        <div class="flex flex-col gap-y-3">
            <h1 class="text-4xl">Temukan Event & Bazar UMKM Terdekat!</h1>
            <p class="text-sm">
                Satu tempat untuk temukan dan dukung UMKM lokal melalui event & bazar seru di kotamu. Temui
                produk-produk
                unik, kuliner khas, dan peluang kolaborasi – semuanya dalam satu platform!
            </p>
            <CtaBtn rounded="full">
                Gabung Sekarang
            </CtaBtn>
        </div>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <StatItem value="110+" label="Event" />
            <StatItem value="200+" label="Anggota" />
            <StatItem value="10+" label="On air" />
            <StatItem value="400+" label="Event berhasil" />
        </div>
    </div>
</template>
