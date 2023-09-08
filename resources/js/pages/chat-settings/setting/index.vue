<script lang="ts" setup>
const username = ref('')
const email = ref('')
const password = ref<string>()
const checkbox = ref(false)
const items = ['foo', 'bar', 'fizz', 'buzz'] as const
const values = ref<typeof items[number][]>([])
</script>

<template>
  <VForm @submit.prevent="() => {}">
    <VRow>
      <VCol cols="12">
        <h1>Global Chat Settings</h1>
      </VCol>
      <VCol cols="12">
        <!-- 👉 Username -->
        <VTextField
          v-model="username"
          label="FILE SIZE"
          placeholder="FILE SIZE"
        />
      </VCol>

      <VCol cols="12">
        <!-- 👉 Email -->
        <VTextField
          v-model="email"
          label="FONT TYPE"
          type="FONT TYPE"
          placeholder="text"
        />
      </VCol>

      <!-- 👉 Status -->
      <VCol cols="12">
        <VSelect
          v-model="values"
          label="Select status"
          :items="['Active', 'Unactive']"
        />
      </VCol>

      <VCol
        cols="12"
        class="d-flex gap-4"
      >
        <!-- 👉 submit and reset button -->
        <VBtn type="submit">
          Submit
        </VBtn>
      </VCol>
    </VRow>
  </VForm>
</template>
