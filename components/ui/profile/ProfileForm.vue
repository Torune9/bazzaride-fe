<template>
  <section class="grid grid-row-3">
    <div class="w-full flex justify-between items-center py-2">
      <h1 class="font-semibold sm:text-3xl text-xl">Profile Information</h1>

      <ButtonAction form="profile-form" :mode="mode" :loading="isLoading" />
    </div>
    <div class="mt-4 max-w-max flex items-center gap-x-4">
      <div class="w-fit h-full flex p-2 rounded-md flex-col items-center gap-2">
        <div
          class="w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-full overflow-hidden relative flex justify-content-center items-center"
        >
          <div
            v-if="!previewImage"
            class="w-full h-full bg-gray-100 text-4xl text-gray-400 flex justify-center items-center text-uppercase"
          >
            <h1>U</h1>
          </div>
          <NuxtImg
            :src="previewImage"
            alt="img-profile"
            class="w-full h-full object-cover"
            v-else
          />
          <div
            class="absolute top-8 right-4 cursor-pointer text-gray-200 mix-blend-difference md:right-2"
          >
            <label
              v-if="!payloadProfile.image"
              for="profile-img"
              class="cursor-pointer"
            >
              <Icon name="uil:camera" size="lg" />
            </label>
            <button
              @click="handleRemoveImage"
              v-else
              for="profile-img"
              class="cursor-pointer text-red-200"
            >
              <Icon name="uil:times" size="lg" />
            </button>
            <input
              type="file"
              id="profile-img"
              name="profile-img"
              class="hidden"
              @change="handleUploadFile"
            />
          </div>
        </div>
      </div>
      <div class="flex flex-col space-y-0.5">
        <h1 class="font-semibold sm:text-2xl text-xl line-clamp-2">
          {{
            `${props.profile?.firstName || "John"} ${
              props.profile?.lastName || "Doe"
            }`
          }}
        </h1>
        <p class="text-sm font-light">Penyelenggara</p>
      </div>
    </div>
    <div class="w-full mt-4 border-1"></div>
  </section>
  <section class="py-6">
    <h1 class="font-semibold sm:text-3xl text-xl mb-4">Personal Details</h1>

    <form @submit.prevent="handleSubmitFormProfile" id="profile-form">
      <div class="grid grid-cols-1 gap-y-2 gap-x-4 font-inter">
        <InputCustom
          v-model="payloadProfile.firstName"
          label="First Name"
          name="first-name"
          type="text"
          id="first-name"
          placeholder="FirstName..."
          :errorMessage="errors.firstName as string"
        />
        <InputCustom
          v-model="payloadProfile.lastName"
          label="Last Name"
          name="last-name"
          type="text"
          id="last-name"
          placeholder="Lastname..."
          :errorMessage="errors.lastName as string"
        />

        <InputCustom
          v-model="payloadProfile.description"
          label="Description"
          name="description"
          type="text"
          id="description"
          placeholder="Lorem ipsum dolor si amet"
          :errorMessage="errors.description as string"
        />
      </div>
    </form>
    <div class="w-full mt-10 border-1"></div>
  </section>
</template>

<script setup lang="ts">
import { ProfileSchema } from "~/model/formSchema";
const config = useRuntimeConfig();

const props = defineProps<{
  mode: "edit" | "create";
  profile: any;
  userId: string;
}>();

const { previewImg, uploadFile, resetFile, handleUploadFile } = useUploadFile();
const token = ref(
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImIyOTljYjUzLWEwZjgtNDBlNi1hOTI1LTI4ODBhYzdmNzI1YiIsInVzZXJuYW1lIjoiYWRtaW4xIiwiZW1haWwiOiJhZG1pbkBnbWFpbC5jb20iLCJpYXQiOjE3NTQwNjI5MDgsImV4cCI6MTc1NDE0OTMwOH0.hXXPi154H73CCdMficqHSBlyx0pimQBgV1noWisb4D4"
);

const isLoading = ref<boolean>(false);
const payloadProfile = reactive({
  userId: props.userId,
  firstName: props.profile?.firstName || "",
  lastName: props.profile?.lastName || "",
  description: props.profile?.description || "",
  image: props.profile?.image || null,
});

const { errors, validate } = useZodForm(ProfileSchema, payloadProfile);

const handleSubmitFormProfile = async () => {
  const result = validate();
  if (!result.success) return;
  isLoading.value = !isLoading.value;
  try {
    const formData = new FormData();
    formData.append("userId", props.userId);
    formData.append("firstName", payloadProfile.firstName);
    formData.append("lastName", payloadProfile.lastName);
    formData.append("description", payloadProfile.description);
    if (uploadFile.value) {
      formData.append("file", uploadFile.value);
    }
    const url =
      props.mode === "create"
        ? `${config.public.apiUrl}/profile`
        : `${config.public.apiUrl}/profile/${props.profile.id}`;
    const method = props.mode === "create" ? "POST" : "PATCH";
    await fetch(url, {
      method,
      headers: {
        Authorization: `Bearer ${token.value}`,
      },
      body: formData,
    });
  } catch (error) {
    console.error(error);
  } finally {
    isLoading.value = !isLoading.value;
  }
};

const handleRemoveImage = () => {
  resetFile();
  payloadProfile.image = null;
};

// const previewImage = previewImg;
const previewImage = computed(() =>
  previewImg.value ? previewImg.value : payloadProfile.image
);

watch(uploadFile, (file: any) => {
  payloadProfile.image = file;
});
</script>
