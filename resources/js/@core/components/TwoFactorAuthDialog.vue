<script setup>
const props = defineProps({
  isDialogVisible: {
    type: Boolean,
    required: true,
    default: false,
  },
  smsCode: {
    type: String,
    required: false,
    default: '',
  },
  authAppCode: {
    type: String,
    required: false,
    default: '',
  },
})

const emit = defineEmits(['update:isDialogVisible'])

const authMethods = [
  {
    icon: 'bx-cog',
    title: 'Authenticator Apps',
    subtitle: 'Get code from an app like Google Authenticator or Microsoft Authenticator.',
    method: 'authApp',
  },
  {
    icon: 'bx-message',
    title: 'SMS',
    subtitle: 'We will send a code via SMS if you need to use your backup login method.',
    method: 'sms',
  },
]

const selectedMethod = ref(['authApp'])
const isAuthAppDialogVisible = ref(false)
const isSmsDialogVisible = ref(false)

const openSelectedMethodDialog = () => {
  if (selectedMethod.value[0] === 'authApp') {
    isAuthAppDialogVisible.value = true
    isSmsDialogVisible.value = false
    emit('update:isDialogVisible', false)
  }
  if (selectedMethod.value[0] === 'sms') {
    isAuthAppDialogVisible.value = false
    isSmsDialogVisible.value = true
    emit('update:isDialogVisible', false)
  }
}
</script>

<template>
  <VDialog
    max-width="900"
    :model-value="props.isDialogVisible"
    @update:model-value="(val) => $emit('update:isDialogVisible', val)"
  >
    <VCard class="pa-5 pa-sm-8">
      <!-- 👉 dialog close btn -->
      <DialogCloseBtn
        variant="text"
        size="small"
        @click="$emit('update:isDialogVisible', false)"
      />

      <VCardItem class="text-center">
        <VCardTitle class="text-h5 mb-2">
          Select Authentication Method
        </VCardTitle>
        <VCardSubtitle>
          You also need to select a method by which the proxy authenticates to the directory serve.
        </VCardSubtitle>
      </VCardItem>

      <VCardText>
        <VList
          v-model:selected="selectedMethod"
          mandatory
          class="card-list auth-method-card"
          :class="$vuetify.display.xs ? 'responsive-card' : ''"
        >
          <VListItem
            v-for="item of authMethods"
            :key="item.title"
            rounded
            border
            :value="item.method"
            class="py-5 px-6 my-6"
            :class="selectedMethod[0] === item.method ? 'bg-light-primary border-primary border-opacity-100' : 'bg-var-theme-background'"
          >
            <template #prepend>
              <VIcon
                :icon="item.icon"
                size="38"
                class="me-4"
              />
            </template>

            <VListItemTitle class="text-xl font-weight-medium mb-1">
              {{ item.title }}
            </VListItemTitle>
            <p class="text-base mb-0">
              {{ item.subtitle }}
            </p>
          </VListItem>
        </VList>

        <div class="text-end">
          <VBtn @click="openSelectedMethodDialog">
            continue
            <VIcon
              end
              icon="bx-chevron-right"
              class="flip-in-rtl"
            />
          </VBtn>
        </div>
      </VCardText>
    </VCard>
  </VDialog>

  <AddAuthenticatorAppDialog
    v-model:isDialogVisible="isAuthAppDialogVisible"
    :auth-code="props.authAppCode"
  />
  <EnableOneTimePasswordDialog
    v-model:isDialogVisible="isSmsDialogVisible"
    :mobile-number="props.smsCode"
  />
</template>

<style lang="scss">
.auth-method-card {
  &.card-list .v-list-item {
    padding-block: 20px !important;
    padding-inline: 25px !important;
  }

  &.responsive-card {
    .v-list-item {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      text-align: center;

      &__prepend {
        svg {
          margin-inline-end: 0 !important;
        }
      }
    }
  }
}
</style>
