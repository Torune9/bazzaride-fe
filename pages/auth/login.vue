<template>
    <Container class="px-4 flex items-center justify-center lg:px-8 gap-x-10">
        <div
            class="w-full h-screen max-lg:hidden flex flex-col gap-y-4 justify-center items-center bg-torqouise-retro rounded-tr-full rounded-tl-full">
            <NuxtImg src="/hero.png" alt="hero-image" class="w-3/4 rounded-full bg-white" />

        </div>
        <!-- Wrapper -->
        <Wrapper class="space-y-6 w-full sm:w-3/4 lg:w-1/2 shrink-0 lg:px-16">
            <!-- Info Login -->
            <div class="space-y-1">
                <TitleSection class="text-4xl lg:text-6xl">
                    Selamat Datang
                </TitleSection>
                <small>
                    Masukan informasi untuk dapat mengakses aplikasi
                </small>
            </div>
            <!-- End Info -->
            <!-- Form -->
            <div class="space-y-4">
                <form @submit.prevent="handleSubmit" class="space-y-4">
                    <InputCustom label="Email" id="email" type="email" placeholder="Jhondoe@mail.com"
                        v-model="form.email" size-class="p-4 rounded-full" :errorMessage="errors.email as string">
                    </InputCustom>
                    <InputCustom label="Password" id="password" type="password" v-model="form.password"
                        size-class="p-4 rounded-full" :errorMessage="errors.password as string">
                    </InputCustom>
                    <div class="space-y-2">
                        <BaseBtn class="bg-yellow-retro border hover:bg-yellow-300 transition-colors duration-300"
                            :disabled="isDisable">
                            <p v-if="!isDisable">Masuk</p>
                            <Spinner v-else />
                        </BaseBtn>
                        <div class="flex flex-row text-sm justify-between">
                            <p>
                                Belum punya akun ?
                                <NuxtLink to="/auth/register" class="underline">
                                    Register
                                </NuxtLink>
                            </p>
                            <NuxtLink to="/auth/forget-password" class="underline">
                                Lupa password
                            </NuxtLink>
                        </div>
                    </div>
                </form>
                <BaseBtn
                    class="bg-purple-retro text-white flex items-center justify-center gap-x-2 hover:bg-purple-800 duration-300 transition-colors"
                    type="button" @click="handleGoogleAuth">
                    <Icon name="uil:google" style="color: white; font-size: 25px" />Login dengan Google
                </BaseBtn>
            </div>
            <!-- End Form -->
            <Back />
        </Wrapper>
        <!-- End Wrapper -->
    </Container>
</template>

<script setup lang="ts">
import { Icon } from '#components'
import { useToast } from 'vue-toastification'
import { useZodForm } from '~/composables/useZodForm'
import { UserLoginSchema } from '~/model/formSchema'

const runtimeConfig = useRuntimeConfig()

definePageMeta({
    layout: false
})
const toast = useToast()

const form = reactive({
    email: '',
    password: ''
})

const isDisable = ref(false)

const { errors, validate } = useZodForm(UserLoginSchema, form)
const router = useRouter()

const useHandleSubmit = UseHandleApi()

const handleSubmit = async () => {
    const result = validate()
    if (!result.success) return
    isDisable.value = true
    try {
        
        const response: any = await useHandleSubmit.post('/user/login', result.data)
        const { message, data } = response
        
        toast.success(message)

        if (!data.role) {
            setTimeout(()=>{
                router.push('/role')
            },1500)
        }

    } catch (error: any) {
        const message =
            error?.data?.message || error?.statusMessage || 'Terjadi kesalahan saat login.'
        toast.error(message)
    } finally {
        isDisable.value = false
    }
}

const handleGoogleAuth = async () => {
    window.location.href = 'http://localhost:3000/api/auth/google'
}

</script>
