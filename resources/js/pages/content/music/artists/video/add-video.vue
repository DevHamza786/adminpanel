<script setup>
import {
requiredValidator,
} from '@validators';
import { PerfectScrollbar } from 'vue3-perfect-scrollbar';

const props = defineProps({
  isDrawerOpen: {
    type: Boolean,
    required: true,
  },
})

const emit = defineEmits([
  'update:isDrawerOpen',
  'VideoData',
])

const isFormValid = ref(false)
const name = ref()
const file = ref()

// 👉 drawer close
const closeNavigationDrawer = () => {
  emit('update:isDrawerOpen', false)
  nextTick(() => {
    refForm.value?.reset()
    refForm.value?.resetValidation()
  })
}

const onSubmit = () => {
  refForm.value?.validate().then(({ valid }) => {
    if (valid) {
      emit('VideoData', {
        id: 0,
        name: name.value,
        currentfile: file.value,
        avatar: '',
      })
      emit('update:isDrawerOpen', false)
      nextTick(() => {
        refForm.value?.reset()
        refForm.value?.resetValidation()
      })
    }
  })
}

const handleDrawerModelValueUpdate = val => {
  emit('update:isDrawerOpen', val)
}
</script>

<template>
  <VNavigationDrawer
    temporary
    :width="400"
    location="end"
    class="scrollable-content"
    :model-value="props.isDrawerOpen"
    @update:model-value="handleDrawerModelValueUpdate"
  >
    <!-- 👉 Title -->
    <AppDrawerHeaderSection
      title="Add Video"
      @cancel="closeNavigationDrawer"
    />

    <PerfectScrollbar :options="{ wheelPropagation: false }">
      <VCard flat>
        <VCardText>
          <!-- 👉 Form -->
          <VForm
            ref="refForm"
            v-model="isFormValid"
            @submit.prevent="onSubmit"
          >
            <VRow>
              <!-- 👉 Category DropDown -->
              <VCol cols="12">
                <VSelect
                  v-model="billing"
                  label="Select Category"
                  :rules="[requiredValidator]"
                />
              </VCol>

              <!-- 👉 Artist DropDown -->
              <VCol cols="12">
                <VSelect
                  v-model="billing"
                  label="Select Artisit"
                  :rules="[requiredValidator]"
                />
              </VCol>

              <!-- 👉 File -->
              <VCol cols="12">
                <VFileInput
                  v-model="file"
                  label="Select Video"
                  :rules="[requiredValidator]"
                />
              </VCol>

              <!-- 👉 Status -->
              <VCol cols="12">
                <VSelect
                  v-model="billing"
                  label="Status"
                  :rules="[requiredValidator]"
                  :items="['Active','Unactive']"
                />
              </VCol>

              <!-- 👉 Submit and Cancel -->
              <VCol cols="12">
                <VBtn
                  type="submit"
                  class="me-3"
                >
                  Submit
                </VBtn>
                <VBtn
                  type="reset"
                  variant="tonal"
                  color="secondary"
                  @click="closeNavigationDrawer"
                >
                  Cancel
                </VBtn>
              </VCol>
            </VRow>
          </VForm>
        </VCardText>
      </VCard>
    </PerfectScrollbar>
  </VNavigationDrawer>
</template>
