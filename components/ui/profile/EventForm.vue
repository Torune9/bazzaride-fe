<template>
  <Wrapper>
    <h1 class="font-semibold sm:text-3xl text-xl mt-3 mb-2">Event Maker</h1>
    <form class="flex flex-col gap-y-4">
      <InputCustom
        v-model="payloadEvent.name"
        label="Name"
        name="name"
        id="name"
        type="text"
        placeholder="Jhon Doe"
        size-class="lg:w-1/2 w-full  rounded-md"
      />

      <InputCustom
        v-model="payloadEvent.quota"
        label="Quota"
        name="quota"
        id="quota"
        type="number"
        size-class="lg:w-1/2 w-full  rounded-md"
      />

      <div
        class="lg:w-1/2 w-full h-60 relative overflow-hidden flex justify-content-center items-center"
      >
        <label
          for="image"
          class="w-full h-full border border-dashed rounded-md flex flex-col cursor-pointer justify-center items-center"
          v-if="!previewImg"
        >
          <Icon
            name="heroicons:cloud-arrow-up"
            style="font-size: 4rem; color: gray"
          />
          <div class="text-center">
            <p
              class="mb-2 text-sm text-gray-500 dark:text-gray-400 font-semibold"
            >
              Click to upload
            </p>
            <p class="text-xs text-gray-500 dark:text-gray-400">PNG, JPG</p>
            <input
              type="file"
              id="image"
              name="image"
              class="hidden"
              @change="handleUploadFile"
            />
          </div>
        </label>

        <article v-else class="w-full h-full">
          <NuxtImg
            :src="previewImg"
            alt="img-profile"
            class="w-full h-full object-cover rounded-md"
          />
          <button
            @click="handleDeleteImage"
            type="button"
            class="absolute top-2 right-2 bg-red-600/50 rounded-full flex justify-center items-center p-1 text-white cursor-pointer"
          >
            <Icon name="heroicons:x-mark-16-solid" style="font-size: 2rem" />
          </button>
        </article>
      </div>

      <InputCustom
        v-model="payloadEvent.date"
        label="Date"
        name="date"
        id="date"
        type="date"
        size-class="lg:w-1/2 w-full rounded-md"
      />

      <div
        class="relative flex lg:flex-row flex-col item-center lg:w-[60%] w-full gap-x-4 gap-y-2"
      >
        <div class="w-full">
          <label for="description" class="font-medium block mb-1"
            >Description</label
          >
          <textarea
            name="description"
            id="description"
            class="border w-full"
            v-model="payloadEvent.description"
            rows="10"
          ></textarea>
        </div>
        <div class="self-start lg:self-end">
          <ButtonAction title="Submit" />
        </div>
      </div>
    </form>
  </Wrapper>
</template>

<script setup lang="ts">
const { previewImg, handleUploadFile, resetFile, uploadFile } = useUploadFile();

const payloadEvent = reactive({
  name: "",
  quota: "",
  image: null,
  date: "",
  description: "",
});

watch(uploadFile, (file: any) => {
  payloadEvent.image = file;
});

const handleDeleteImage = () => {
  resetFile();
  payloadEvent.image = null;
};
</script>
