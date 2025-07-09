<template>
  <Container class="lg:px-16 px-0">
    <Wrapper class="space-y-4">
      <div class="max-w-max space-y-2.5 flex flex-col p-2">
        <div class="flex items-center gap-x-2 font-light">
          <NuxtLink to="/">Home</NuxtLink>
          <Icon name="uil:angle-right-b" />
          <p>Event name</p>
        </div>
        <TitleSection class="text-3xl font-bold font-inter"
          >EVENT NAME</TitleSection
        >
        <div class="flex items-center gap-x-2">
          <small>10 July 2004</small>
          <small>Kouta: 150 orang</small>
        </div>
      </div>

      <div class="flex-1">
        <EventImage src="https://placehold.co/400x800" />
      </div>

      <div class="grid grid-cols-2 gap-x-5">
        <p class="sm">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
        <p class="sm">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </div>
    </Wrapper>
  </Container>
</template>

<script setup lang="ts"></script>
