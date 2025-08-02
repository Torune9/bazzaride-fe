<template>
    <div class="h-screen w-screen flex justify-center items-center bg-black/30">
        <Spinner />
    </div>
</template>

<script setup lang="ts">
import { useToast } from 'vue-toastification'

definePageMeta({ layout: false })

const router = useRouter()
const routes = useRoute()

const toast = useToast()

onMounted(async () => {
    const { id } = routes.query
    try {
        const response : any = await $fetch(`http://localhost:3000/api/user/me/${id}`)
        console.log(response);
        toast.success(response.message)
        setTimeout(()=>{
            router.push('/events')
        },1500)
    } catch (error) {
        toast.error(error)
        setTimeout(()=>{
            router.push('/auth/login')
        },1500)
        console.error('Gagal ambil user:', error)
    }
})
</script>
