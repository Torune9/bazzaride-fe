<template>
    <Container class="flex justify-center items-center px-4">
        <Wrapper class="flex flex-col gap-y-8 bg-slate-100 rounded-md p-4 md:p-6 shadow-md md:!w-[35%] sm:!w-3/4">
            <div class="space-y-4">
                <h1 class="text-3xl md:text-4xl font-medium">Forgot your password</h1>
                <p>
                    Masukkan email kamu, dan kami akan kirimkan link untuk reset password
                </p>
            </div>
            <form action="" class="flex flex-col gap-y-4">
                <InputCustom type="email" placeholder="jhondoe@mail.com" :model-value="email" label="Email" id="email"
                    size-class="rounded-full" p-input="p-4" />
                <div class="text-end">
                    <BaseBtn class="bg-purple-retro text-white">
                        Submit
                    </BaseBtn>
                </div>
                <Back />
            </form>
        </Wrapper>
    </Container>
</template>

<script setup lang="ts">
definePageMeta({
    layout: false
})

const email = ref('')
</script>
