<template>
    <div class="h-screen w-screen flex justify-center items-center bg-black/30">
        <Spinner />
    </div>
</template>

<script setup lang="ts">
import { useToast } from 'vue-toastification'
import { userStore } from '~/store/userStore'

definePageMeta({ layout: false })

const router = useRouter()

const storeUser = userStore()

const toast = useToast()
const useHandleApi = UseHandleApi()

const getUser = async () => {
    try {
        const response: any = await useHandleApi.get('/user/me')

        toast.success(response.message)
        
        storeUser.userLogin = response.data
        storeUser.isLogged = true
        
        if (!response.data.roleId) {
            setTimeout(() => {
                router.push('/role')
            }, 1500)
        }else{
            setTimeout(() => {
                router.push('/events')
            }, 1500)
        }
    } catch (error) {
        toast.error(error)
        setTimeout(() => {
            router.push('/auth/login')
        }, 1500)
        console.error('Gagal ambil user:', error)
    }
}
onMounted(() => {
    getUser()
})
</script>
