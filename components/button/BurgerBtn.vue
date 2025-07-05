<template>
    <div class="flex flex-col w-10 gap-y-1 cursor-pointer lg:hidden" @click="toggleMobileMenu">
        <span class="block h-2 bg-black transition duration-500"
            :class="openDropdown ? 'rotate-45 translate-y-2' : ''"></span>
        <span class="block h-2 bg-black transition duration-500" :class="openDropdown ? 'scale-0' : ''"></span>
        <span class="block h-2 bg-black transition duration-500"
            :class="openDropdown ? '-translate-y-4 -rotate-45' : ''"></span>
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  openDropdown: boolean
}>()
const emits = defineEmits<{ (e: 'update:openDropdown', value: boolean):void }>()

const toggleMobileMenu = () => {
   emits('update:openDropdown', !props.openDropdown)
}

</script>
