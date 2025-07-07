<template>
    <div class="font-inter">
        <nav>
            <NavBar />
        </nav>
        <main class="border flex flex-col gap-y-8 p-4 box-border md:px-16">
            <slot name="content" />
        </main>
        <footer class="p-4 bg-blue-500 md:px-16">
            <FooterSection/>
        </footer>
    </div>
</template>
