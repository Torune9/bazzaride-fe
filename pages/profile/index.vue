<template>
  <div class="h-screen flex">
    <aside class="w-60 p-4 bg-gray-100 min-h-screen flex flex-col">
      <div class="font-inter mb-2 space-y-0.5">
        <h1 class="font-bold text-xl">Settings</h1>
        <p class="md:text-sm text-xs">You can find all setting here.</p>
      </div>

      <nav class="mt-2">
        <ul class="space-y-2">
          <li
            v-for="(item, i) in menuItems"
            :key="i"
            @click="currentTab = item.key"
            class="cursor-pointer p-2 border rounded hover:bg-gray-300"
          >
            {{ item.label }}
          </li>
        </ul>
      </nav>
    </aside>

    <main class="w-3/4 p-4 overflow-y-auto">
      <div v-if="currentTab === 'profile'">
        <h1>INI PROFILE</h1>
      </div>

      <div v-else-if="currentTab === 'event'">
        <h1>INI EVENT</h1>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
const currentTab = ref("profile");

const menuItems = [
  { key: "profile", label: "Profile" },
  { key: "event", label: "Event" },
];
</script>
