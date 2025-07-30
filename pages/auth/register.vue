<template>
  <Container class="px-4 flex items-center justify-center gap-x-10 lg:px-8 max-h-screen overflow-hidden">
    <div
      class="w-full h-screen max-lg:hidden flex flex-col gap-y-4 justify-center items-center bg-yellow-retro rounded-tr-full rounded-tl-full">
      <NuxtImg src="/hero.png" alt="hero-image" class="w-3/4 rounded-full bg-white" />
    </div>
    <!-- Wrapper -->
    <Wrapper class="space-y-6 sm:w-3/4 lg:w-1/2 shrink-0 lg:px-16 overflow-auto max-h-screen hide-scroll">
      <!-- Info Register -->
      <div class="space-y-1">
        <TitleSection class="text-4xl lg:text-6xl"> Daftar Akun </TitleSection>
        <small> Masukan informasi untuk dapat melakukan login </small>
      </div>
      <!-- End Info -->
      <!-- Form -->
      <div class="space-y-4">
        <form @submit.prevent="handleSubmit" class="space-y-4">
          <InputCustom label="Username" id="username" type="text" placeholder="jhon doe" v-model="payload.username"
            size-class="p-4 rounded-full" :errorMessage="errors.username as string" />
          <InputCustom label="Email" id="email" type="email" placeholder="Jhondoe@mail.com" v-model="payload.email"
            size-class="p-4 rounded-full" :errorMessage="errors.email as string" />
          <InputCustom label="Password" id="password" type="password" v-model="payload.password"
            size-class="p-4 rounded-full" :errorMessage="errors.password as string" />
          <div class="space-y-2">
            <BaseBtn
              class="bg-red-retro border border-black text-white hover:bg-red-500 transition-colors duration-300">
              Masuk
            </BaseBtn>
            <div class="flex flex-row text-sm justify-between">
              <p>
                Sudah punya akun ?
                <NuxtLink to="/auth/login" class="underline"> Login </NuxtLink>
              </p>
              <NuxtLink to="/auth/forget-password" class="underline">
                Lupa password
              </NuxtLink>
            </div>
          </div>
        </form>
      </div>
      <!-- End Form -->
      <Back />
    </Wrapper>
    <!-- End Wrapper -->
  </Container>
</template>
<script setup lang="ts">
import { NuxtLink } from "#components";
import { useToast } from "vue-toastification";
import { UserRegisterSchema } from "~/model/formSchema";
definePageMeta({
  layout: false,
});

const payload = reactive({
  username: "",
  email: "",
  password: "",
});

const { errors, validate } = useZodForm(UserRegisterSchema, payload)

const useHandleSubmit = UseHandleSubmit()
const router = useRouter()
const toast = useToast()

const handleSubmit = async () => {
  const result = validate()
  if (!result.success) {
    return
  }
  try {
    const response = await useHandleSubmit.post('/user/register', result.data)
    const { message, data, statusCode } = response
    if (statusCode == 201) {
      toast.success(message)
      setTimeout(() =>
        router.push('/auth/login'), 1500)
    }
    Object.assign(payload, {
      username: '',
      email: '',
      password: ''
    })

  } catch (error: any) {
    const { message, statusCode } = error.data
    if (statusCode == 409) {
      return toast.error('Email suda terpakai')
    }
    console.log(error.data);
  }
  finally {
    Object.keys(errors.value).forEach((key) => {
      (errors.value as Record<string, string>)[key] = ''
    })

  }
}
</script>
