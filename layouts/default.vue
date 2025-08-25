<template>
  <div class="font-inter flex flex-col min-h-screen">
    <!-- Header -->
    <header
      v-if="showHeader"
      class="sticky top-0 bg-white/30 backdrop-blur-lg shadow-xs z-50"
    >
      <NavBar />
    </header>

    <!-- Main -->
    <main class="flex flex-1 flex-col gap-y-8 p-4 box-border md:px-16">
      <slot />
    </main>

    <!-- Footer -->
    <footer v-if="showFooter" class="p-4 bg-yellow-retro md:px-16">
      <FooterSection />
    </footer>
  </div>
</template>

<script setup>
const route = useRoute()
const showHeader = route.meta.hideHeader !== true
const showFooter = route.meta.hideFooter !== true
</script>
