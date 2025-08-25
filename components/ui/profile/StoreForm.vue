<template>
  <Loading v-if="loading" />
  <Wrapper class="flex flex-col gap-y-10 font-inter">
    <TitleSection class="text-4xl"> Store </TitleSection>
    <Store :data="storeData" v-if="storeData" />
    <form @submit.prevent="handleSubmit" class="flex flex-col gap-y-4" v-else>
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
          <input
            type="file"
            id="image"
            @change="handleImage"
            class="hidden"
            accept="image/png,image/jpeg"
            ref="fileInput"
          />
        </label>
        <Transition name="fade">
          <div
            class="w-full h-48 absolute top-0 rounded-md overflow-hidden bg-white box-border p-2"
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
        </Transition>
        <ErrorMessage :message="maxSizeMessage" v-if="maxSizeMessage" />
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
import { useToast } from "vue-toastification";
import { userStore } from "~/store/userStore";

const toast = useToast();
const viewImage = ref<string>("");
const fileInput = useTemplateRef<HTMLInputElement | null>("fileInput");

const api = UseHandleApi();
const storeUser = userStore();
const loading = ref(false);

const storeData = ref();

const storeForm = reactive({
  name: "",
  image: "",
  description: "",
});

const maxSizeMessage = ref("");

const MAX_SIZE = 3 * 1024 * 1024;
const handleImage = (event: Event) => {
  const target = event.target as HTMLInputElement;
  if (!target.files || target.files.length === 0) return;

  const file = target.files[0];

  if (file.size > MAX_SIZE) {
    target.value = "";
    return (maxSizeMessage.value = "Ukuran file terlalu besar. Maksimal 3MB");
  }
  const fr = new FileReader();
  fr.readAsDataURL(file);

  fr.onload = () => {
    viewImage.value = fr.result as string;
    storeForm.image = fr.result as string;
    maxSizeMessage.value = "";
  };

  fr.onerror = () => {
    console.log(fr.error);
  };
};

const deleteImage = () => {
  storeForm.image = "";
  viewImage.value = "";

  if (fileInput.value) {
    fileInput.value.value = "";
  }
};

const handleSubmit = async () => {
  loading.value = true;
  try {
    const formData = new FormData();
    formData.append("name", storeForm.name);
    formData.append("description", storeForm.description);
    formData.append("userId", storeUser.userLogin.id);
    if (fileInput.value) {
      formData.append("image", fileInput.value.files[0]);
    }

    const response = await api.post("/store", formData);
    toast.success(response.message);
    console.log(response);
    deleteImage();
    Object.assign(storeForm, {
      name: "",
      description: "",
    });
    getStore();
  } catch (error) {
    toast.error("error ketika memproses data");
    console.log(error);
  } finally {
    loading.value = false;
  }
};

const getStore = async () => {
  loading.value = true;
  try {
    const response: any = await api.get(`/store/${storeUser.userLogin.id}`);
    storeData.value = response.data;
    console.log(response);
  } catch (error) {
    console.log(error);
  } finally {
    loading.value = false;
  }
};

onMounted(() => {
  getStore();
});
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
