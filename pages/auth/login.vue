<template>
    <Container class="px-4 flex items-center justify-center lg:px-0 gap-x-10">
        <div class="w-full h-screen bg-torqouise-retro max-lg:hidden"></div>
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
                <form action="" class="space-y-4">
                    <InputCustom
                        label="Email"
                        id="email"
                        type="email"
                        placeholder="Jhondoe@mail.com"
                        v-model="payload.email"
                        size-class="p-4 rounded-full"
                    >
                    </InputCustom>
                    <InputCustom
                        label="Password"
                        id="password"
                        type="password"
                        v-model="payload.password"
                        size-class="p-4 rounded-full"
                    >
                    </InputCustom>
                    <div class="space-y-2">
                        <BaseBtn
                            class="bg-yellow-retro border hover:bg-yellow-300 transition-colors duration-300"
                        >
                            Masuk
                        </BaseBtn>
                        <div class="flex flex-row text-sm justify-between">
                            <p>
                                Belum punya akun ?
                                <NuxtLink to="/auth/register" class="underline">
                                    Register
                                </NuxtLink>
                            </p>
                            <NuxtLink to="/forget-password" class="underline">
                                Lupa password
                            </NuxtLink>
                        </div>
                    </div>
                </form>
                <BaseBtn
                    class="bg-purple-retro text-white flex items-center justify-center gap-x-2 hover:bg-purple-800 duration-300 transition-colors"
                    type="button"
                >
                    <Icon
                        name="uil:google"
                        style="color: white; font-size: 25px"
                    />Login dengan Google
                </BaseBtn>
            </div>
            <!-- End Form -->
            <Back />
        </Wrapper>
        <!-- End Wrapper -->
    </Container>
</template>
<script setup lang="ts">
definePageMeta({
    layout: false,
});

const payload = reactive({
    email: "",
    password: "",
});
</script>
