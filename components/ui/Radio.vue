<template>
    <div class="rounded-md bg-slate-100 shadow-md hover:shadow-xl"
        :class="[role == value ? 'scale-110 shadow-lg ring-2 ring-slate-200' : '']">
        <label :for="id" class="cursor-pointer group">
            <slot />
        </label>
        <input type="radio" name="role" :id="id" v-model="role" :value="value" class="hidden"
            @click.prevent="handleClick">
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{
    id: string,
    value: number,
    bg? : string,
}>()

const role = defineModel('role')

function handleClick(e: MouseEvent) {
    // Cek: jika user klik radio yang sedang aktif, kosongkan
    if (role.value === props.value) {
        role.value = 0
    } else {
        role.value = props.value
    }
}
</script>
