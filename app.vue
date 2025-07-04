<script setup lang="ts">
const store = useCounterStore();
</script>

<template>
  <div>
    <!-- <NuxtRouteAnnouncer />
    <NuxtWelcome /> -->
    <h1 class="text-3xl font-bold underline">Hello world!</h1>
    <h1 class="text-2xl font-bold">Counter: {{ store.count }}</h1>
    <button @click="store.increment" class="btn btn-primary mt-2">
      Tambah
    </button>
  </div>
</template>
