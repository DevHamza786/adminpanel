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
  'CategoryData',
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

const checkboxOne = ref(false)
const checkboxTwo = ref(false)
const checkboxThree = ref(false)

const capitalizedLabel = label => {
  const convertLabelText = label.toString()
  
  return convertLabelText.charAt(0).toUpperCase() + convertLabelText.slice(1)
}
</script>

<template>
  <VNavigationDrawer
    temporary
    :width="700"
    location="end"
    class="scrollable-content"
    :model-value="props.isDrawerOpen"
    @update:model-value="handleDrawerModelValueUpdate"
  >
    <!-- 👉 Title -->
    <AppDrawerHeaderSection
      title="Add Role"
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
              <VCol cols="12">
                <VTextField
                  v-model="name"
                  label="Name "
                  :rules="[requiredValidator]"
                />
              </VCol>

              <VCol cols="12">
                <div class="demo-space-x">
                  <h4>User Management</h4>
                  <VCheckbox
                    v-model="checkboxOne"
                    label="Read"
                  />

                  <VCheckbox
                    v-model="checkboxTwo"
                    label="Write"
                  />
                  <VCheckbox
                    v-model="checkboxThree"
                    label="Create"
                  />
                  <VCheckbox
                    v-model="checkboxThree"
                    label="Delete"
                  />
                </div>
              </VCol>
              <VCol cols="12">
                <div class="demo-space-x">
                  <h4>
                    Music Management	
                  </h4>
                  <VCheckbox
                    v-model="checkboxOne"
                    label="Read"
                  />

                  <VCheckbox
                    v-model="checkboxTwo"
                    label="Write"
                  />
                  <VCheckbox
                    v-model="checkboxThree"
                    label="Create"
                  />
                  <VCheckbox
                    v-model="checkboxThree"
                    label="Delete"
                  />
                </div>
              </VCol>
              <VCol cols="12">
                <div class="demo-space-x">
                  <h4>Voting</h4>
                  <VCheckbox
                    v-model="checkboxOne"
                    label="Read"
                  />

                  <VCheckbox
                    v-model="checkboxTwo"
                    label="Write"
                  />
                  <VCheckbox
                    v-model="checkboxThree"
                    label="Create"
                  />
                  <VCheckbox
                    v-model="checkboxThree"
                    label="Delete"
                  />
                </div>
              </VCol>              <VCol cols="12">
                <div class="demo-space-x">
                  <h4>
                    Online Shop	
                  </h4>
                  <VCheckbox
                    v-model="checkboxOne"
                    label="Read"
                  />

                  <VCheckbox
                    v-model="checkboxTwo"
                    label="Write"
                  />
                  <VCheckbox
                    v-model="checkboxThree"
                    label="Create"
                  />
                  <VCheckbox
                    v-model="checkboxThree"
                    label="Delete"
                  />
                </div>
              </VCol>              <VCol cols="12">
                <div class="demo-space-x">
                  <h4>
                    Fanpage Management	
                  </h4>
                  <VCheckbox
                    v-model="checkboxOne"
                    label="Read"
                  />

                  <VCheckbox
                    v-model="checkboxTwo"
                    label="Write"
                  />
                  <VCheckbox
                    v-model="checkboxThree"
                    label="Create"
                  />
                  <VCheckbox
                    v-model="checkboxThree"
                    label="Delete"
                  />
                </div>
              </VCol>              <VCol cols="12">
                <div class="demo-space-x">
                  <h4>Report</h4>
                  <VCheckbox
                    v-model="checkboxOne"
                    label="Read"
                  />

                  <VCheckbox
                    v-model="checkboxTwo"
                    label="Write"
                  />
                  <VCheckbox
                    v-model="checkboxThree"
                    label="Create"
                  />
                  <VCheckbox
                    v-model="checkboxThree"
                    label="Delete"
                  />
                </div>
              </VCol>              <VCol cols="12">
                <div class="demo-space-x">
                  <h4>
                    Post Management	
                  </h4>
                  <VCheckbox
                    v-model="checkboxOne"
                    label="Read"
                  />

                  <VCheckbox
                    v-model="checkboxTwo"
                    label="Write"
                  />
                  <VCheckbox
                    v-model="checkboxThree"
                    label="Create"
                  />
                  <VCheckbox
                    v-model="checkboxThree"
                    label="Delete"
                  />
                </div>
              </VCol>              <VCol cols="12">
                <div class="demo-space-x">
                  <h4>
                    News Management	
                  </h4>
                  <VCheckbox
                    v-model="checkboxOne"
                    label="Read"
                  />

                  <VCheckbox
                    v-model="checkboxTwo"
                    label="Write"
                  />
                  <VCheckbox
                    v-model="checkboxThree"
                    label="Create"
                  />
                  <VCheckbox
                    v-model="checkboxThree"
                    label="Delete"
                  />
                </div>
              </VCol>              <VCol cols="12">
                <div class="demo-space-x">
                  <h4>
                    Video Management	
                  </h4>
                  <VCheckbox
                    v-model="checkboxOne"
                    label="Read"
                  />

                  <VCheckbox
                    v-model="checkboxTwo"
                    label="Write"
                  />
                  <VCheckbox
                    v-model="checkboxThree"
                    label="Create"
                  />
                  <VCheckbox
                    v-model="checkboxThree"
                    label="Delete"
                  />
                </div>
              </VCol>              <VCol cols="12">
                <div class="demo-space-x">
                  <h4>Movie Management	</h4>
                  <VCheckbox
                    v-model="checkboxOne"
                    label="Read"
                  />

                  <VCheckbox
                    v-model="checkboxTwo"
                    label="Write"
                  />
                  <VCheckbox
                    v-model="checkboxThree"
                    label="Create"
                  />
                  <VCheckbox
                    v-model="checkboxThree"
                    label="Delete"
                  />
                </div>
              </VCol>              <VCol cols="12">
                <div class="demo-space-x">
                  <h4>
                    Series Management	
                  </h4>
                  <VCheckbox
                    v-model="checkboxOne"
                    label="Read"
                  />

                  <VCheckbox
                    v-model="checkboxTwo"
                    label="Write"
                  />
                  <VCheckbox
                    v-model="checkboxThree"
                    label="Create"
                  />
                  <VCheckbox
                    v-model="checkboxThree"
                    label="Delete"
                  />
                </div>
              </VCol>              <VCol cols="12">
                <div class="demo-space-x">
                  <h4>
                    Zarok App	
                  </h4>
                  <VCheckbox
                    v-model="checkboxOne"
                    label="Read"
                  />

                  <VCheckbox
                    v-model="checkboxTwo"
                    label="Write"
                  />
                  <VCheckbox
                    v-model="checkboxThree"
                    label="Create"
                  />
                  <VCheckbox
                    v-model="checkboxThree"
                    label="Delete"
                  />
                </div>
              </VCol>              <VCol cols="12">
                <div class="demo-space-x">
                  <h4>
                    Event Management	
                  </h4>
                  <VCheckbox
                    v-model="checkboxOne"
                    label="Read"
                  />

                  <VCheckbox
                    v-model="checkboxTwo"
                    label="Write"
                  />
                  <VCheckbox
                    v-model="checkboxThree"
                    label="Create"
                  />
                  <VCheckbox
                    v-model="checkboxThree"
                    label="Delete"
                  />
                </div>
              </VCol>

              <!-- 👉 Submit and Cancel -->
              <VCol cols="12">
                <VBtn
                  type="submit"
                  class="me-3"
                >
                  Save
                </VBtn>
              </VCol>
            </VRow>
          </VForm>
        </VCardText>
      </VCard>
    </PerfectScrollbar>
  </VNavigationDrawer>
</template>
