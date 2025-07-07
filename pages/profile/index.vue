<template>
  <div class="flex h-screen">
    <!-- Overlay (for mobile) -->
    <div
      v-if="isSidebarOpen"
      class="fixed inset-0 bg-black/40 z-40 md:hidden"
      @click.self="isSidebarOpen = false"
    ></div>
    <!-- End Overlay  -->

    <aside
      :class="[
        'fixed md:static z-50 top-0 left-0 w-72 lg:p-6 p-4 min-h-screen flex flex-col transform transition-transform duration-300',
        isSidebarOpen ? 'translate-x-0' : '-translate-x-full',
        'md:translate-x-0',
      ]"
    >
      <SideBar
        :items="menuItems"
        :isOpen="isSidebarOpen"
        @toggle="isSidebarOpen = !isSidebarOpen"
        @select="
          (key) => {
            currentTab = key;
            isSidebarOpen = false;
          }
        "
      />
    </aside>

    <main class="flex-1 p-4 overflow-y-auto">
      <div v-if="currentTab === 'profile'" class="py-2 px-6">
        <section class="grid grid-row-3">
          <div class="w-full flex justify-between items-center py-2">
            <h1 class="font-semibold sm:text-3xl text-xl">
              Profile Information
            </h1>

            <button
              class="font-inter flex items-center gap-x-2 p-2 px-2 border rounded-md bg-blue-500 text-white cursor-pointer"
            >
              <Icon name="uil:edit" />
              <span class="text-sm">Edit</span>
            </button>
          </div>
          <div class="mt-4 max-w-max flex items-center gap-x-4">
            <div
              class="w-fit h-full flex p-2 rounded-md flex-col items-center gap-2"
            >
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
          <h1 class="font-semibold sm:text-3xl text-xl mb-4">
            Personal Details
          </h1>

          <form>
            <div
              class="grid sm:grid-cols-2 grid-cols-1 gap-y-2 gap-x-4 font-inter"
            >
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
                v-model="payloadProfile.email"
                label="Email"
                name="email"
                type="email"
                id="email"
                placeholder="jhondoe@example.com"
              />
              <InputCustom
                v-model="payloadProfile.username"
                label="Username"
                name="username"
                type="text"
                id="username"
                placeholder="Username..."
              />
              <InputCustom
                v-model="payloadProfile.bio"
                label="Bio"
                name="bio"
                type="text"
                id="bio"
                placeholder="Lorem ipsum dolor si amet"
              />
              <InputCustom
                v-model="payloadProfile.phoneNumber"
                label="Phone"
                name="phone"
                type="number"
                id="phone"
              />
            </div>
          </form>
          <div class="w-full mt-10 border-1"></div>
        </section>

        <section>
          <h1 class="font-semibold sm:text-3xl text-xl">Address</h1>
          <div class="py-6 flex flex-col gap-2">
            <InputCustom
              v-model="payloadAddress.city"
              label="City"
              name="city"
              id="city"
              type="text"
              placeholder="New York..."
            />
            <InputCustom
              v-model="payloadAddress.subdistrict"
              label="Subdistrict"
              name="subdistrict"
              id="city"
              type="text"
            />
          </div>
        </section>
      </div>

      <div v-else-if="currentTab === 'event'">
        <h1>INI EVENT</h1>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
const menuItems: { key: string; label: string; icon: string }[] = [
  { key: "profile", label: "Profile", icon: "uil:user" },
  { key: "event", label: "Event", icon: "uil:calendar" },
];

const currentTab = ref<string>("profile");
const isSidebarOpen = ref<boolean>(false);
const previewImage = ref<string | null>("");

const payloadProfile = reactive({
  firstName: "",
  lastName: "",
  username: "",
  email: "",
  bio: "",
  phoneNumber: "",
  image: (null as File) || null,
});

const payloadAddress = reactive({
  city: "",
  subdistrict: "",
});

const handleUploadFile = (e: Event) => {
  const target = e.target as HTMLInputElement;
  if (target.files && target.files.length > 0) {
    const file = target.files[0];
    previewImage.value = URL.createObjectURL(file);
    payloadProfile.image = file;
  }
};



const handleRemoveImage = () => {
  previewImage.value = null;
  payloadProfile.image = null;
};

watch(previewImage, (newVal, oldVal) => {
  if (oldVal?.startsWith("blob:")) {
    URL.revokeObjectURL(oldVal);
  }
});
</script>
