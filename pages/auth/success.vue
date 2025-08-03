<template>
    <div class="h-screen w-screen flex justify-center items-center bg-black/30">
        <Spinner />
    </div>
</template>

<script setup lang="ts">
import { useToast } from 'vue-toastification'

definePageMeta({ layout: false })

const router = useRouter()

const toast = useToast()
const useHandleApi = UseHandleApi()

const getUser = async () => {
    try {
        const response :any = await useHandleApi.get('/user/current/account')
        toast.success(response.message)
        if (!response.roleId) {
            setTimeout(()=>{
                router.push('/role')
            },1500)
        }
    } catch (error) {
        toast.error(error)
        setTimeout(()=>{
            router.push('/auth/login')
        },1500)
        console.error('Gagal ambil user:', error)
    }
}
onMounted(() => {
    getUser()
})
</script>
