<template>
  <section>
    <div class="w-full flex justify-between items-center py-2">
      <h1 class="font-semibold sm:text-3xl text-xl">Address</h1>
      <ButtonAction
        form="address-form"
        :mode="formMode"
        title="Create Address"
        :loading="isLoading"
      />
    </div>
    <form
      @submit.prevent="handleSubmitFormAddress"
      form="address-form"
      class="py-6 flex flex-col gap-2"
    >
      <InputCustom
        v-model="payloadAddress.city"
        label="City"
        name="city"
        id="city"
        type="text"
        placeholder="New York..."
      />
      <InputCustom
        v-model="payloadAddress.subdistrict"
        label="Subdistrict"
        name="subdistrict"
        id="city"
        type="text"
      />
    </form>
  </section>
</template>

<script setup lang="tsx">
const formMode = ref<"create" | "edit">("create");
const isLoading = ref<boolean>(false);
const payloadAddress = reactive({
  city: "",
  subdistrict: "",
});

const handleSubmitFormAddress = async () => {
  console.log("test");
};
</script>
