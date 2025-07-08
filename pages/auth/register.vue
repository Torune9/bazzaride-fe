<template>
    <div class="h-screen border-red-800 px-4 flex items-center justify-center font-inter lg:px-0 gap-x-10">
        <div class="w-full h-screen bg-torqouise-retro max-lg:hidden">
        </div>
        <!-- Wrapper -->
        <div class="space-y-6 w-full sm:w-3/4 lg:w-1/2 shrink-0 lg:px-16">
            <!-- Info Register -->
            <div class="space-y-1">
                <TitleSection class="text-4xl lg:text-6xl">
                    Daftar Akun
                </TitleSection>
                <small>Masukan informasi untuk dapat melakukan login</small>
            </div>
            <!-- End Info -->
            <!-- Form -->
            <div class="space-y-4">
                <form action="" class="space-y-4">
                    <InputCustom label="Username" id="username" type="text" placeholder="jhon doe"
                        v-model="payload.password" size-class="p-4 rounded-full" />
                    <InputCustom label="Email" id="email" type="email" placeholder="Jhondoe@mail.com"
                        v-model="payload.email" size-class="p-4 rounded-full" />
                    <InputCustom label="Password" id="password" type="password" v-model="payload.password"
                        size-class="p-4 rounded-full" />
                    <div class="space-y-2">
                        <button
                            class="w-full bg-red-retro border border-black rounded-full p-4 cursor-pointer text-white">
                            Masuk
                        </button>
                        <div class="flex flex-row text-sm justify-between">
                            <p>
                                Sudah punya akun ?
                                <NuxtLink to="/auth/login" class="underline">
                                    Login
                                </NuxtLink>
                            </p>
                            <NuxtLink to="/forget-password" class="underline">
                                Lupa password
                            </NuxtLink>
                        </div>
                    </div>
                </form>
            </div>
            <!-- End Form -->
            <NuxtLink class="flex items-center" to="/">
                <Icon name="uil:arrow-circle-left" style="font-size: 20px;" />Back
            </NuxtLink>
        </div>
        <!-- End Wrapper -->
    </div>
</template>
<script setup lang="ts">
import { NuxtLink } from '#components';


const payload = reactive({
    email: '',
    password: ''
})
</script>
