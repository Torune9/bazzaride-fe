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
          <NuxtLink :to="`/events/${event.id}`" v-for="event in events" class="h-48 w-32 bg-slate-200 shrink-0 lg:h-96 lg:w-72">
            <NuxtImg :src="'https://placehold.co/600x800'" class="w-full h-full object-cover"/>
          </NuxtLink>
        </div>
        
      </div>
    </div>
  </section>
</template>


<script setup lang="ts">
const events = ref < any[] > ([])
const api = UseHandleApi()
const getLatestEvent = async () => {
  try {
    const response: any = await api.get('/event/latest?maxLimit=true')
    events.value = response.data
  } catch (error) {
    console.log(error);

  }
}
onMounted(() => {
  getLatestEvent()
})
</script>
