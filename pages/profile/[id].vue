<template>
  <div class="flex h-screen">
    <!-- Overlay (for mobile) -->
    <div
      v-if="isSidebarOpen"
      class="fixed inset-0 bg-black/40 z-40 md:hidden"
      @click.self="isSidebarOpen = false"
    ></div>
    <!-- End Overlay  -->

    <!-- SideBar -->
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
            selectedTab(key);
            isSidebarOpen = false;
          }
        "
      />
    </aside>
    <!-- End Sidebar -->
    <main class="flex-1 p-4 overflow-y-auto">
      <!-- Profile Content -->
      <div v-if="currentTab === 'profile'" class="py-2 px-6 shrink-0">
        <ProfileForm :mode="formMode" />
        <AddressForm />
      </div>
      <!-- End Profile Content -->

      <!-- Event Content  -->
      <div v-else-if="currentTab === 'event'" class="py-2 px-6 shrink-0">
        <EventForm />
      </div>
      <!-- Event Content -->
    </main>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: false,
});

const formMode = ref<"create" | "edit">("create");
const menuItems: { key: string; label: string; icon: string }[] = [
  { key: "profile", label: "Profile", icon: "uil:user" },
  { key: "event", label: "Event", icon: "uil:calendar" },
];
const route = useRoute();
const router = useRouter();
const currentTab = ref<string>("profile");
const isSidebarOpen = ref<boolean>(false);

const selectedTab = (key: "profile" | "event") => {
  currentTab.value = key;
  router.replace({ query: { tab: key } });
};

onMounted(() => {
  const tabQuery = route.query.tab;
  if (tabQuery === "event" || tabQuery === "profile") {
    currentTab.value = tabQuery;
  }
});

watch(
  () => route.query.tab,
  (newVal) => {
    if (newVal === "event" || newVal === "profile") {
      currentTab.value = newVal;
    }
  }
);
</script>
