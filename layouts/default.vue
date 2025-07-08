<template>
    <div class="font-inter">
        <nav class="sticky top-0 bg-white/30 backdrop-blur-sm shadow-xs">
            <NavBar />
        </nav>
        <main class="flex flex-col gap-y-8 p-4 box-border md:px-16">
            <slot name="content" />
        </main>
        <footer class="p-4 bg-yellow-retro md:px-16">
            <FooterSection/>
        </footer>
    </div>
</template>
