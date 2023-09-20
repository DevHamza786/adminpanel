<script setup>
import { useUserListStore } from '@/views/apps/user/useUserListStore'
import AddCategory from './add.vue'

const userListStore = useUserListStore()
const searchQuery = ref('')
const selectedRole = ref()
const selectedPlan = ref()
const selectedStatus = ref()
const rowPerPage = ref(10)
const currentPage = ref(1)
const totalPage = ref(1)
const totalUsers = ref(0)
const users = ref([])

// SECTION Checkbox toggle
const selectedRows = ref([])
const selectAllUser = ref(false)

// 👉 add/remove all checkbox ids in array
const selectUnselectAll = () => {
  selectAllUser.value = !selectAllUser.value
  if (selectAllUser.value) {
    users.value.forEach(user => {
      if (!selectedRows.value.includes(`check${ user.id }`))
        selectedRows.value.push(`check${ user.id }`)
    })
  } else {
    selectedRows.value = []
  }
}

const currentTab = ref(0)
const isAddCategoryVisible = ref(false)
</script>

<template>
  <section>
    <VRow>
      <VCol cols="12">
        <VCard title="All Policy and Terms">
          <VCardText class="d-flex flex-wrap gap-4">
            <VSpacer />
            <div
              class="app-user-search-filter d-flex align-center"
              style="justify-content: flex-end;"
            >
              <VBtn @click="isAddCategoryVisible = true">
                Add New
              </VBtn>
            </div>
          </VCardText>
          <VRow>
            <VCol
              cols="12"
              sm="4"
            >
              <VTabs
                v-model="currentTab"
                direction="vertical"
                class="v-tabs-pill"
              >
                <VTab>
                  <VIcon
                    start
                    icon="bx-user"
                  />
                  Option 1
                </VTab>

                <VTab>
                  <VIcon
                    start
                    icon="bx-lock-alt"
                  />
                  Option 2
                </VTab>

                <VTab>
                  <VIcon
                    start
                    icon="bx-broadcast"
                  />
                  Option 3
                </VTab>
              </VTabs>
            </VCol>

            <VCol
              cols="12"
              sm="8"
            >
              <VWindow v-model="currentTab">
                <VWindowItem>
                  <VTextarea
                    label="Privacy Policy"
                    rows="4"
                    class="mb-2 mx-2"
                  />
                </VWindowItem>

                <VWindowItem>
                  <VTextarea
                    label="Privacy Policy"
                    rows="4"
                    class="mb-2 mx-2"
                  />
                </VWindowItem>

                <VWindowItem>
                  <VTextarea
                    label="Privacy Policy"
                    rows="4"
                    class="mb-2 mx-2"
                  />
                </VWindowItem>
              </VWindow>
            </VCol>
          </VRow>

          <VDivider />
        </VCard>
      </VCol>
    </VRow>
    <!-- 👉 Add New User -->
    <AddCategory
      v-model:isDrawerOpen="isAddCategoryVisible"
      @user-data="addNewUser"
    />
  </section>
</template>

<style lang="scss">
.app-user-search-filter {
  inline-size: 385px;
}

.text-capitalize {
  text-transform: capitalize;
}

.user-list-name:not(:hover) {
  color: rgba(var(--v-theme-on-background), var(--v-high-emphasis-opacity));
}

.per-page-select {
  margin-block: auto;

  .v-field__input {
    align-items: center;
    padding: 2px;
    font-size: 14px;
  }

  .v-field__append-inner {
    align-items: center;
    padding: 0;
    margin-inline-start: -2.5rem;

    .v-icon {
      margin-inline-start: 0 !important;
    }
  }
}
</style>
