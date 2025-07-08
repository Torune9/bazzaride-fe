<template>
    <button class="p-3 border cursor-pointer bg-yellow-retro hover:bg-yellow-300 transition-colors duration-300" :class="roundedBtnOpt">
        <slot/>
    </button>
</template>

<script setup lang="ts">
const props = defineProps<{
    rounded? : string
}>()

const roundedBtnOpt = computed(()=>{
    switch(props.rounded){
        case 'full':
            return 'rounded-full';
        case 'xl':
            return 'rounded-xl';
        case 'lg':
            return 'rounded-lg';
        case 'sm':
            return 'rounded-sm';
        default: 
             return 'rounded'
    }
})
</script>
