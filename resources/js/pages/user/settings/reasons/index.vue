<script setup>
import { useUserListStore } from '@/views/apps/user/useUserListStore'
import AddCategory from './add.vue'

const userListStore = useUserListStore()

const isDialogVisible = ref(false)
const isDialogAcceptVisible = ref(false)
const isAddCategoryVisible = ref(false)

const addNewUser = userData => {
  userListStore.addUser(userData)
}
</script>

<template>
  <section>
    <VRow>
      <VCol cols="12">
        <VCard title="User Reasons">
          <VCardText class="d-flex flex-wrap gap-4">
            <VSpacer />
            <div
              class="app-user-search-filter d-flex align-center"
              style="justify-content: flex-end;"
            >
              <VBtn @click="isAddCategoryVisible = true">
                Add Reason
              </VBtn>
            </div>
          </VCardText>

          <VDivider />

          <VTable class="text-no-wrap">
            <!-- 👉 table head -->
            <thead>
              <tr>
                <th scope="col">
                  #
                </th>
                <th scope="col">
                  Reason Title
                </th>
                <th scope="col">
                  Reasons
                </th>
                <th scope="col">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  1
                </td>
                <td>
                  Testing
                </td>
                <td>
                  Flag
                </td>
                <td
                  class="text-center"
                  style="inline-size: 80px;"
                >
                  <VBtn
                    icon="bx-edit"
                    variant="text"
                    color="success"
                    @click="isDialogAcceptVisible = true"
                  />

                  <VBtn
                    icon="bx-trash "
                    variant="text"
                    color="error"
                    @click="isDialogVisible = true"
                  />
                </td>
              </tr>
            </tbody>
          </VTable>

          <VDialog
            v-model="isDialogVisible"
            max-width="600"
          >
            <!-- Dialog Content -->
            <VCard title="Are you sure?">
              <DialogCloseBtn
                variant="text"
                size="small"
                @click="isDialogVisible = false"
              />

              <VCardText>
                <VRow>
                  <VCol cols="12">
                    <VCardText>
                      Are you sure you want to delete this?
                    </VCardText>
                  </VCol>
                </VRow>
              </VCardText>

              <VCardText class="d-flex justify-end gap-2">
                <VBtn
                  color="secondary"
                  variant="tonal"
                  @click="isDialogVisible = false"
                >
                  Cancel
                </VBtn>
                <VBtn @click="isDialogVisible = false">
                  Delete it!
                </VBtn>
              </VCardText>
            </VCard>
          </VDialog>

          <VDialog
            v-model="isDialogAcceptVisible"
            width="500"
          >
            <!-- Dialog Content -->
            <VCard title="Accept Request">
              <DialogCloseBtn
                variant="text"
                size="small"
                @click="isDialogAcceptVisible = false"
              />

              <VCardText>
                Bear claw pastry cotton candy jelly toffee. Pudding chocolate cake shortbread bonbon biscuit sweet. Lemon drops cupcake muffin brownie fruitcake. Pastry pastry tootsie roll jujubes chocolate cake gummi bears muffin pudding caramels. Jujubes lollipop gummies croissant shortbread. Cupcake dessert marzipan topping gingerbread apple pie chupa chups powder. Cake croissant halvah candy canes gummies.
              </VCardText>

              <VCardText class="text-end">
                <VBtn @click="isDialogAcceptVisible = false">
                  I accept
                </VBtn>
              </VCardText>
            </VCard>
          </VDialog>

          <VDivider />
        </VCard>
      </VCol>
    </VRow>
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
