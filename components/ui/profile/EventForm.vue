<template>
  <Wrapper>
    <h1 class="font-semibold sm:text-3xl text-xl mt-3 mb-2">Event Maker</h1>
    <form class="space-y-1.5">
      <InputCustom
        v-model="payloadEvent.name"
        label="Name"
        name="name"
        id="name"
        type="text"
        placeholder="Jhon Doe"
        size-class="lg:w-1/2 w-full"
      />

      <InputCustom
        v-model="payloadEvent.quota"
        label="Quota"
        name="quota"
        id="quota"
        type="number"
        size-class="lg:w-1/2 w-full"
      />
      <div>
        <label for="image" class="font-medium block mb-1">Image</label>
        <div
          class="lg:w-1/2 w-full h-60 relative overflow-hidden flex justify-content-center items-center"
        >
          <div
            class="w-full h-full bg-gray-100 flex items-center"
            v-if="!previewImg"
          >
            <Icon name="uil:picture" class="mx-auto text-8xl cursor-pointer" />
          </div>
          <article v-else class="w-full h-full">
            <NuxtImg
              :src="previewImg"
              alt="img-profile"
              class="w-full h-full object-cover"
            />
          </article>

          <label
            v-if="!payloadEvent.image"
            for="image-event"
            class="absolute top-1/2 left-1/2 z-10 transform text-center -translate-x-1/2 -translate-y-1/2 cursor-pointer text-gray-200 mix-blend-difference md:right-2"
          >
            {{ !previewImg ? "Choose Image" : "" }}
            <input
              type="file"
              id="image-event"
              name="image-event"
              class="hidden"
              @change="handleUploadFile"
            />
          </label>
          <button
            v-else
            @click="handleDeleteImage"
            for="image-event"
            class="cursor-pointer text-red-500 p-4 rounded-full absolute top-1 right-1"
          >
            <Icon name="uil:times" class="text-4xl" />
          </button>
        </div>
      </div>
      <InputCustom
        v-model="payloadEvent.date"
        label="Date"
        name="date"
        id="date"
        type="date"
        size-class="lg:w-1/2 w-full"
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
