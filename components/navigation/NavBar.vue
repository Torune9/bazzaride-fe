<template>
  <nav
    class="flex flex-row justify-between min-h-18 max-lg:p-4 items-center max-lg:relative md:px-16 box-border"
  >
    <h1 class="text-2xl font-semibold">Bazzaride</h1>
    <BurgerBtn v-model:open-dropdown="isOpen" class="z-10" />
    <div class="absolute top-full right-0 z-0 text-lg lg:static lg:w-full">
      <div
        class="flex flex-col max-lg:bg-white max-lg:w-36 box-border transition-all items-center lg:opacity-100 lg:-translate-y-0 lg:flex-row lg:justify-evenly lg:transition-none max-lg:shadow-xl rounded-md"
        :class="
          isOpen ? 'translate-0 opacity-100' : '-translate-y-10 opacity-0'
        "
      >
        <ul
          class="w-full h-full max-lg:my-1 max-lg:space-y-2 lg:w-full lg:inline-flex lg:gap-x-8 lg:items-center lg:pl-64 box-border max-lg:p-2"
        >
          <li
            class="p-2 hover:bg-purple-retro/80 rounded-md hover:text-white transition-colors"
          >
            <NuxtLink class="flex" to="/events"> Event </NuxtLink>
          </li>
          <li
            class="p-2 hover:bg-purple-retro/80 rounded-md hover:text-white transition-colors"
          >
            <NuxtLink class="flex" to="/participants"> Participants </NuxtLink>
          </li>
          <li
            class="p-2 hover:bg-purple-retro/80 rounded-md hover:text-white transition-colors lg:hidden"
            v-if="isLogged"
          >
            <NuxtLink class="flex" to="/profile"> Profile </NuxtLink>
          </li>
          <li
            class="px-2 py-1 rounded-md lg:hidden bg-red-600 text-center text-white cursor-pointer"
            v-if="isLogged"
            @click="handeLogout"
          >
            Logout
          </li>
        </ul>
        <div class="flex flex-row gap-2 p-1 max-lg:w-full">
          <NuxtLink
            class="max-lg:w-full rounded-full text-sm cursor-pointer p-2 px-4 bg-torqouise-retro text-white text-center hover:bg-emerald-300 transition-colors duration-300"
            to="/auth/login"
            v-if="!isLogged"
          >
            Masuk
          </NuxtLink>
          <div
            class="w-14 h-14 rounded-full border overflow-hidden max-lg:hidden"
            v-else
          >
            <NuxtLink to="/profile">
              <NuxtImg
                src="https://placehold.co/400"
                class="w-full h-full object-cover"
              />
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { NuxtLink } from "#components";
import { useToast } from "vue-toastification";
import { userStore } from "~/store/userStore";

const isOpen = ref(false);
const api = UseHandleApi();
const toast = useToast();

const storeUser = userStore();
const { isLogged } = storeToRefs(storeUser);

const handeLogout = async () => {
  storeUser.$reset();
  try {
    const response = await api.post("/user/logout");
    toast.success("logout berhasil");
    localStorage.clear();
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};
</script>
