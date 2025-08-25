<template>
  <Wrapper class="flex flex-col gap-y-10 font-inter">
    <TitleSection class="text-4xl"> Store </TitleSection>
    <form action="" class="flex flex-col gap-y-4">
      <InputCustom
        label="Name"
        id="name"
        placeholder="name"
        v-model:model-value="storeForm.name"
        class="lg:w-1/2"
      ></InputCustom>
      <div class="space-y-4 lg:w-1/2 relative">
        <label
          for="image"
          class="w-full h-48 border border-dashed flex flex-col relative justify-center items-center cursor-pointer rounded-md"
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
          </div>
          <input type="file" id="image" @change="handleImage" class="hidden" />
        </label>
        <div
          class="w-full h-48 absolute top-0 rounded-md overflow-hidden"
          v-if="viewImage"
        >
          <NuxtImg
            :src="viewImage"
            alt="store-img"
            class="h-full w-full object-contain"
          />
          <button
            @click="deleteImage"
            type="button"
            class="absolute top-2 right-2 bg-red-600/50 rounded-full flex justify-center items-center p-1 text-white cursor-pointer"
          >
            <Icon name="heroicons:x-mark-16-solid" style="font-size: 2rem" />
          </button>
        </div>
      </div>
      <div class="flex flex-col gap-y-2 lg:w-1/2">
        <label for="desc">Description</label>
        <textarea
          rows="8"
          name="desc"
          id="desc"
          v-model="storeForm.description"
          class="border p-2 rounded-md focus:outline-0"
        ></textarea>
      </div>
      <BaseBtn
        class="border bg-blue-600 rounded-md! hover:bg-blue-500 transition-colors duration-500 text-white text-lg lg:w-1/2"
      >
        Submit
      </BaseBtn>
    </form>
  </Wrapper>
</template>

<script setup lang="ts">
const viewImage = ref<string>("");

const storeForm = reactive({
  name: "",
  image: "",
  description: "",
});

const handleImage = (event) => {
  const file = event.target.files[0];

  const fr = new FileReader();
  fr.readAsDataURL(file);

  fr.onload = () => {
    viewImage.value = fr.result as string;
  };

  fr.onerror = () => {
    console.log(fr.error);
  };
};

const deleteImage = () => {
  storeForm.image = "";
  viewImage.value = "";
};
</script>
