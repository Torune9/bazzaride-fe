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
      <div class="py-2 px-6 shrink-0">
        <component :is="currentTab"></component>
        <AddressForm v-if="currentTab == profileComponent" />
        <!-- <ProfileForm :mode="formMode" />
        <AddressForm /> -->
      </div>
      <!-- End Profile Content -->

      <!-- Event Content  -->
      <!-- <div v-else-if="currentTab === 'event'" class="py-2 px-6 shrink-0">
        <EventForm />
      </div> -->
      <!-- Event Content -->
    </main>
  </div>
</template>

<script setup lang="ts">
import type { Component, ConcreteComponent } from "vue";

definePageMeta({
  layout: false,
});

const menuItems: { key: string; label: string; icon: string }[] = [
  { key: "profile", label: "Profile", icon: "uil:user" },
  { key: "event", label: "Event", icon: "uil:calendar" },
  { key: "store", label: "Store", icon: "uil:shop" },
];

const profileComponent = resolveComponent("ProfileForm") as ConcreteComponent;
const eventComponent = resolveComponent("EventForm") as ConcreteComponent;
const storeComponent = resolveComponent("StoreForm") as ConcreteComponent;

const currentTab = shallowRef<Component>(
  resolveComponent("ProfileForm") as ConcreteComponent
);
const isSidebarOpen = ref<boolean>(false);

const selectedTab = (key: string) => {
  switch (key) {
    case "profile":
      return (currentTab.value = profileComponent);
    case "event":
      return (currentTab.value = eventComponent);
    case "store":
      return (currentTab.value = storeComponent);
  }
};
</script>
