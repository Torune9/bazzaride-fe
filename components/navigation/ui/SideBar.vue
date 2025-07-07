<template>
  <div class="p-4 bg-gray-100 rounded-md shadow-md h-screen">
    <button
      class="absolute cursor-pointer -right-8 top-8 md:hidden bg-white border border-gray-300 rounded-full w-8 h-8 flex items-center justify-center"
      @click="$emit('toggle')"
    >
      <Icon
        name="uil:angle-right"
        class="transition-transform duration-300 transform"
        :class="isOpen ? 'rotate-180' : 'rotate-0'"
      />
    </button>
    <div class="font-inter mb-2 space-y-0.5">
      <h1 class="font-bold text-xl">Settings</h1>
      <p class="md:text-sm text-xs">You can find all setting here.</p>
    </div>

    <nav class="mt-2">
      <ul class="space-y-2">
        <li
          v-for="(item, i) in items"
          :key="i"
          @click="$emit('select', item.key)"
          class="list-custom group"
        >
          <Icon :name="item.icon" />
          <span>{{ item.label }}</span>
        </li>
      </ul>
      <NuxtLink to="/" class="list-custom group mt-2">
        <Icon name="uil:arrow-left" />
        <span>Back to home</span>
      </NuxtLink>
    </nav>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  items: { key: string; label: string; icon: string }[];
  isOpen: boolean;
}>();

defineEmits<{
  (e: "toggle"): void;
  (e: "select", key: string): void;
}>();
</script>
