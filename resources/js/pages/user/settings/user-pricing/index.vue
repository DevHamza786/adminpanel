<script setup>
import { useUserListStore } from '@/views/apps/user/useUserListStore'

const userListStore = useUserListStore()
const switchOn = ref('')
const switchOntwo = ref('')
const switchOnthree = ref('')
const selectedRole = ref()
const selectedPlan = ref()
const selectedStatus = ref()
const rowPerPage = ref(10)
const currentPage = ref(1)
const totalPage = ref(1)
const totalUsers = ref(0)
const users = ref([])

const isDialogVisible = ref(false)
const isDialogAcceptVisible = ref(false)
</script>

<template>
  <section>
    <VRow>
      <VCol cols="12">
        <VCard title="Prcinig">
          <VDivider />

          <VTable class="text-no-wrap">
            <!-- 👉 table head -->
            <thead>
              <tr>
                <th scope="col">
                  ROLE
                </th>
                <th scope="col">
                  PRICE
                </th>
                <th scope="col">
                  FREE
                </th>
              </tr>
            </thead>

            <!-- 👉 table body -->
            <tbody>
              <tr>
                <td>
                  Standard
                </td>
                <td>
                  0
                  <VBtn
                    icon="bx-edit"
                    variant="text"
                  />
                </td>
                <td>
                  <VSwitch v-model="switchOn" />
                </td>
              </tr>
              <tr>
                <td>
                  Premium
                </td>
                <td>
                  5900
                  <VBtn
                    icon="bx-edit"
                    variant="text"
                  />
                </td>
                <td>
                  <VSwitch
                    v-model="switchOntwo"
                    value="on"
                  />
                </td>
              </tr>
              <tr>
                <td>
                  VIP
                </td>
                <td>
                  11900 
                  <VBtn
                    icon="bx-edit"
                    variant="text"
                  />
                </td>
                <td>
                  <VSwitch
                    v-model="switchOnthree"
                    value="on"
                  />
                </td>
              </tr>
            </tbody>
          </VTable>
        </VCard>
      </VCol>
    </VRow>
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
