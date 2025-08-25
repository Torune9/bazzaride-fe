<template>
    <TitleSection class="text-4xl">
        Participants
    </TitleSection>
    <Wrapper class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
       <Card v-if="participants"  v-for="data in participants" :data="data"/>
    </Wrapper>
</template>

<script setup lang="ts">
 const api = UseHandleApi()
 const participants = ref(null)
 const getPart = async ()=>{
    try {
        const response:any = await api.get('/store')
        participants.value = response.data
        console.log(response);
        
    } catch (error) {
        console.log(error);
        
    }
 }

 onMounted(()=>{
    getPart()
 })
</script>
