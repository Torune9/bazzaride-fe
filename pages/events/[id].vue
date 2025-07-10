<template>
  <div class="grid lg:grid-cols-[1fr_400px] gap-2 font-inter">
    <!-- Detail Content -->
    <div class="space-y-4 p-2">
      <!-- Breadcrumb -->
      <section class="max-w-max space-y-2.5 flex flex-col">
        <div class="flex items-center gap-x-2 font-light text-xs">
          <NuxtLink to="/">Home</NuxtLink>
          <Icon name="uil:angle-right-b" />
          <NuxtLink to="/events">Events</NuxtLink>
          <Icon name="uil:angle-right-b" />
          <p>{{ truncate(event.name) }}</p>
        </div>
        <TitleSection class="text-3xl font-bold font-inter">{{
          event.name
        }}</TitleSection>
      </section>
      <!--End Breadcrumb -->

      <!-- Poster Image -->
      <article class="w-full h-auto md:h-[800px]">
        <NuxtImg
          src="https://placehold.co/800x800"
          class="w-full h-full object-cover rounded-md"
        />
      </article>
      <!-- Poster Image -->

      <!-- Desctription -->
      <section
        class="max-w-max space-y-3.5 font-inter font-light leading-relaxed"
      >
        <div class="flex flex-col space-y-2">
          <span class="flex items-center gap-x-2">
            <Icon name="uil:calendar-alt" class="text-green-400 text-2xl" />
            <p>{{ event.date }}.</p></span
          >
          <span class="flex items-center gap-x-2">
            <Icon name="uil:hourglass" class="text-green-400 text-2xl" />
            <p>Kouta: {{ event.quota }} orang.</p></span
          >
        </div>

        <p>{{ event.description }}</p>
      </section>
      <!-- End Description -->
    </div>
    <!-- End Detail Content -->

    <!-- More Event -->
    <div class="space-y-4 p-2">
      <h1>Event Lainnya</h1>
      <div class="grid lg:grid-cols-1 sm:grid-cols-2 gap-4">
        <CardEvent :event="event" v-for="(event, i) in topEvents" :key="i" />
      </div>
    </div>
    <!--End More Event -->
  </div>
</template>

<script setup lang="ts">
const event = {
  id: "1",
  name: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima, vitae!",
  quota: 100,
  category: "food",
  date: "10 Juni 2025",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum.",
};

const events = [
  {
    id: "1",
    name: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima, vitae!",
    quota: 100,
    category: "food",
    date: "10 juni 2025",
  },
  {
    id: "2",
    name: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima, vitae!",
    quota: 100,
    category: "food",
    date: "10 juni 2025",
  },
  {
    id: "3",
    name: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima, vitae!",
    quota: 100,
    category: "food",
    date: "10 juni 2025",
  },
  {
    id: "4",
    name: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima, vitae!",
    quota: 100,
    category: "food",
    date: "10 juni 2025",
  },
];

const topEvents = events.slice(0, 3);

const { truncate } = useTruncText();
</script>
