<script setup>
import {
requiredValidator,
} from '@validators'
import { PerfectScrollbar } from 'vue3-perfect-scrollbar'

const props = defineProps({
  isDrawerOpen: {
    type: Boolean,
    required: true,
  },
})

const emit = defineEmits([
  'update:isDrawerOpen',
  'CategoryData',
])

const isFormValid = ref(false)
const name = ref()
const file = ref()
const switch1 = ref(1)
const switch2 = ref('Show')
const switch3 = ref('Show')
const switch4 = ref('Show')



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
      emit('CategoryData', {
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
    :width="600"
    location="end"
    class="scrollable-content"
    :model-value="props.isDrawerOpen"
    @update:model-value="handleDrawerModelValueUpdate"
  >
    <!-- 👉 Title -->
    <AppDrawerHeaderSection
      title="Create FanPage Type"
      @cancel="closeNavigationDrawer"
    />

    <PerfectScrollbar :options="{ wheelPropagation: false }">
      <VCard flat>
        <VCardText>
          <VForm
            ref="refForm"
            v-model="isFormValid"
            @submit.prevent="onSubmit"
          >
            <VRow>
              <VCol cols="12">
                <VTextField
                  v-model="name"
                  label="Name "
                  :rules="[requiredValidator]"
                />
              </VCol>

              <VCol cols="12">
                <VFileInput
                  v-model="name"
                  icon="bx-camera"
                  label="Icon"
                />
              </VCol>

              <VCol cols="12">
                <div class="demo-space-x">
                  <VSwitch
                    v-model="switch1"
                    label="CONCERTS"
                    :true-value="1"
                    :false-value="0"
                  />

                  <VSwitch
                    v-model="switch2"
                    label="DEMOSTRATION"
                    true-value="Show"
                    false-value="Hide"
                  />
                  
                  <VSwitch
                    v-model="switch3"
                    label="CONFERENCE"
                    true-value="Show"
                    false-value="Hide"
                  />
                  
                  <VSwitch
                    v-model="switch4"
                    label="UPLOAD VIDEO"
                    true-value="Show"
                    false-value="Hide"
                  />
                </div>
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
