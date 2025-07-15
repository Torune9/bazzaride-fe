<template>
  <section class="grid grid-row-3">
    <div class="w-full flex justify-between items-center py-2">
      <h1 class="font-semibold sm:text-3xl text-xl">Profile Information</h1>

      <ButtonAction
        form="profile-form"
        :mode="mode"
        title="Create Profile"
        :loading="isLoading"
      />
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
          Ujang Penantang
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
        />
        <InputCustom
          v-model="payloadProfile.lastName"
          label="Last Name"
          name="last-name"
          type="text"
          id="last-name"
          placeholder="Lastname..."
        />

        <InputCustom
          v-model="payloadProfile.description"
          label="Description"
          name="description"
          type="text"
          id="description"
          placeholder="Lorem ipsum dolor si amet"
        />
      </div>
    </form>
    <div class="w-full mt-10 border-1"></div>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  mode: "edit" | "create";
}>();

const { previewImg, uploadFile, resetFile, handleUploadFile } = useUploadFile();

const isLoading = ref<boolean>(false);
const payloadProfile = reactive({
  firstName: "",
  lastName: "",
  description: "",
  image: null,
});

const handleSubmitFormProfile = () => {
  isLoading.value = !isLoading.value;
};

const handleRemoveImage = () => {
  resetFile();
  payloadProfile.image = null;
};

const previewImage = previewImg;

watch(uploadFile, (file: any) => {
  payloadProfile.image = file;
});
</script>
