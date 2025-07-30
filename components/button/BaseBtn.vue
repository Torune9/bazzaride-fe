<template>
    <button class="w-full rounded-full p-4" :class="disabled ? 'cursor-default' : 'cursor-pointer'" ref="btn">
        <slot/>
    </button>
</template>

<script setup lang="ts">
const props = defineProps<{
    disabled? : boolean
}>()

const btn = useTemplateRef('btn')

watch(()=>props.disabled,()=>{
    if (props.disabled) {
        btn.value?.setAttribute('disabled','')
    }else{
        btn.value?.removeAttribute('disabled')
    }
})
</script>
