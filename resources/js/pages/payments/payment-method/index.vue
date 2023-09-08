<script setup>
const username = ref('')
const email = ref('')
const password = ref()
const checkbox = ref(false)

const items = [
  'foo',
  'bar',
  'fizz',
  'buzz',
]

const values = ref([])
</script>

<template>
  <div>
    <VRow class="match-height my-3">
      <VCol
        cols="12"
        md="6"
      >
        <VForm @submit.prevent="() => {}">
          <VRow>
            <VCol cols="12">
              <h1>Paypal Settings</h1>
            </VCol>
            <VCol cols="12">
              <VTextField
                v-model="username"
                label="Client ID"
              />
            </VCol>

            <VCol cols="12">
              <VTextField
                v-model="email"
                label="Client Secret"
                type="text"
              />
            </VCol>

            <VCol cols="12">
              <VSelect
                v-model="status"
                label="Sandbox Mode"
                :items="['Active', 'Unactive']"
              />
            </VCol>

            <VCol
              cols="12"
              class="d-flex gap-4"
            >
              <VBtn type="submit">
                Submit
              </VBtn>
            </VCol>
          </VRow>
        </VForm>
      </VCol>
      <VCol
        cols="12"
        md="6"
      >
        <VForm @submit.prevent="() => {}">
          <VRow>
            <VCol cols="12">
              <h1>Stripe Settings</h1>
            </VCol>
            <VCol cols="12">
              <VTextField
                v-model="username"
                label="Stripe Key"
              />
            </VCol>

            <VCol cols="12">
              <VTextField
                v-model="email"
                label="Strioe Secret"
                type="text"
              />
            </VCol>

            <VCol
              cols="12"
              class="d-flex gap-4"
            >
              <VBtn type="submit">
                Submit
              </VBtn>
            </VCol>
          </VRow>
        </VForm>
      </VCol>
    </VRow>
  </div>
</template>
