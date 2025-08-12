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
            <!-- <CardEvent :event="event" v-for="event in events.splice(0,2)" /> -->
        </div>
    </div>
    <TitleSection class="text-4xl">Daftar Event</TitleSection>
    <div>
        <InputCustom label="Search Event" type="text" id="search" placeholder="search..." v-model="search" />
    </div>
    <!-- Daftar Event -->
    <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <CardEvent :event="event" v-for="event in events" />
        <div v-if="loading" class="col-span-full flex items-center justify-center">
            <Spinner />
        </div>
    </div>
</template>

<script setup lang="ts">
const search = ref("")
definePageMeta({
    hideFooter: true,
})

const api = UseHandleApi()
const events = ref<any[]>([])

const page = ref(0)
const loading = ref(false)
const finished = ref(false)

const getEvent = async () => {
    if (loading.value || finished.value) return
    loading.value = true
    try {
        const response: any = await api.get(`/event?page=${page.value}`)

        if (response.data.length > 0) {
            events.value.push(...response.data)
            page.value++
        } else {
            finished.value = true
        }
    } catch (error) {
        console.error(error)
    } finally {
        loading.value = false
    }
}

const handleScroll = () => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement
    if (scrollTop + clientHeight >= scrollHeight - 10) {
        getEvent()
    }
}

onMounted(() => {
    getEvent()
    window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
})
</script>
