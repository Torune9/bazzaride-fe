<template>
  <div class="font-inter flex flex-col min-h-screen">
    <header class="sticky top-0 bg-white/30 backdrop-blur-lg shadow-xs z-50">
      <NavBar />
    </header>
    <main class="flex flex-1 flex-col gap-y-8 p-4 box-border md:px-16">
      <slot />
    </main>
    <footer class="p-4 bg-yellow-retro md:px-16">
      <FooterSection />
    </footer>
  </div>
</template>
