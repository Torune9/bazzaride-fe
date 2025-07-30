<template>
  <section>
    <div class="flex flex-col gap-y-4">
      <TitleSection class="text-2xl lg:text-4xl">
        200+ UMKM Telah bergabung,<br />
        dan 300+ penyelenggara event yang aktif
      </TitleSection>
      <div class="space-y-4">
        <h1 class="text-lg border-purple-retro border-l-4 pl-1">Event Terbaru</h1>
        <div class="w-full flex gap-x-2 overflow-x-auto hide-scroll">
          <div
            v-for="n in 6"
            class="h-48 w-32 bg-slate-200 shrink-0 lg:h-96 lg:w-72"
          ></div>
        </div>
      </div>
    </div>
  </section>
</template>
