<script setup>
import { useUserListStore } from '@/views/apps/user/useUserListStore'
import { avatarText } from '@core/utils/formatters'

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

const isDialogVisible = ref(false)
const isDialogAcceptVisible = ref(false)
const reason = ref('')

// 👉 Fetching users
const fetchUsers = () => {
  userListStore.fetchUsers({
    q: searchQuery.value,
    status: selectedStatus.value,
    plan: selectedPlan.value,
    role: selectedRole.value,
    perPage: rowPerPage.value,
    currentPage: currentPage.value,
  }).then(response => {
    users.value = response.data.users
    totalPage.value = response.data.totalPage
    totalUsers.value = response.data.totalUsers
  }).catch(error => {
    console.error(error)
  })
}

watchEffect(fetchUsers)

// 👉 watching current page
watchEffect(() => {
  if (currentPage.value > totalPage.value)
    currentPage.value = totalPage.value
})

// 👉 search filters
const roles = [
  {
    title: 'Admin',
    value: 'admin',
  },
  {
    title: 'Author',
    value: 'author',
  },
  {
    title: 'Editor',
    value: 'editor',
  },
  {
    title: 'Maintainer',
    value: 'maintainer',
  },
  {
    title: 'Subscriber',
    value: 'subscriber',
  },
]

const plans = [
  {
    title: 'Basic',
    value: 'basic',
  },
  {
    title: 'Company',
    value: 'company',
  },
  {
    title: 'Enterprise',
    value: 'enterprise',
  },
  {
    title: 'Team',
    value: 'team',
  },
]

const status = [
  {
    title: 'Pending',
    value: 'pending',
  },
  {
    title: 'Active',
    value: 'active',
  },
  {
    title: 'Inactive',
    value: 'inactive',
  },
]

const resolveUserRoleVariant = role => {
  const roleLowerCase = role.toLowerCase()
  if (roleLowerCase === 'subscriber')
    return {
      color: 'primary',
      icon: 'bx-user',
    }
  if (roleLowerCase === 'author')
    return {
      color: 'warning',
      icon: 'bx-cog',
    }
  if (roleLowerCase === 'maintainer')
    return {
      color: 'success',
      icon: 'bx-doughnut-chart',
    }
  if (roleLowerCase === 'editor')
    return {
      color: 'info',
      icon: 'bx-pencil',
    }
  if (roleLowerCase === 'admin')
    return {
      color: 'error',
      icon: 'bx-laptop',
    }
  
  return {
    color: 'primary',
    icon: 'bx-user',
  }
}

const resolveUserStatusVariant = stat => {
  const statLowerCase = stat.toLowerCase()
  if (statLowerCase === 'pending')
    return 'warning'
  if (statLowerCase === 'active')
    return 'success'
  if (statLowerCase === 'inactive')
    return 'secondary'
  
  return 'primary'
}

// 👉 watching current page
watchEffect(() => {
  if (currentPage.value > totalPage.value)
    currentPage.value = totalPage.value
})

// 👉 Computing pagination data
const paginationData = computed(() => {
  const firstIndex = users.value.length ? (currentPage.value - 1) * rowPerPage.value + 1 : 0
  const lastIndex = users.value.length + (currentPage.value - 1) * rowPerPage.value
  
  return `${ firstIndex }-${ lastIndex } of ${ totalUsers.value }`
})

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

// 👉 watch if checkbox array is empty all select should be uncheck
watch(selectedRows, () => {
  if (!selectedRows.value.length)
    selectAllUser.value = false
}, { deep: true })

const addRemoveIndividualCheckbox = checkID => {
  if (selectedRows.value.includes(checkID)) {
    const index = selectedRows.value.indexOf(checkID)

    selectedRows.value.splice(index, 1)
  } else {
    selectedRows.value.push(checkID)
    selectAllUser.value = true
  }
}

const addNewUser = userData => {
  userListStore.addUser(userData)

  // refetch User
  fetchUsers()
}

const computedMoreList = computed(() => {
  return paramId => [
    {
      title: 'View',
      value: 'view',
      prependIcon: 'bx-show',
      to: {
        name: 'apps-user-view-id',
        params: { id: paramId },
      },
    },
    {
      title: 'Edit',
      value: 'edit',
      prependIcon: 'bx-pencil',
    },
    {
      title: 'Delete',
      value: 'delete',
      prependIcon: 'bx-trash-alt',
    },
  ]
})

const userListMeta = [
  {
    icon: 'bx-user',
    color: 'primary',
    title: 'Event Requests',
    stats: '21,459',
    percentage: +29,
    subtitle: 'Total Users',
  },
  {
    icon: 'bx-user-plus',
    color: 'error',
    title: 'Total Events',
    stats: '4,567',
    percentage: +18,
    subtitle: 'Last week analytics',
  },
  {
    icon: 'bx-user-check',
    color: 'success',
    title: 'Total Past Events',
    stats: '19,860',
    percentage: -14,
    subtitle: 'Last week analytics',
  },
]
</script>

<template>
  <section>
    <VRow>
      <VCol
        v-for="meta in userListMeta"
        :key="meta.title"
        cols="12"
        sm="6"
        lg="4"
      >
        <VCard>
          <VCardText class="d-flex justify-space-between">
            <div>
              <span>{{ meta.title }}</span>
              <div class="d-flex align-center gap-2">
                <h6 class="text-h6">
                  {{ meta.stats }}
                </h6>
                <span
                  :class="meta.percentage > 0 ? 'text-success' : 'text-error'"
                  class="text-sm"
                >({{ meta.percentage > 0 ? `+${meta.percentage}` : meta.percentage }}%)</span>
              </div>
              <span class="text-sm">{{ meta.subtitle }}</span>
            </div>

            <VAvatar
              rounded
              variant="tonal"
              :color="meta.color"
              :icon="meta.icon"
            />
          </VCardText>
        </VCard>
      </VCol>
      <VCol cols="12">
        <VCard title="All Requests">
          <VCardText class="d-flex flex-wrap gap-4">
            <VSpacer />
            <div class="app-user-search-filter d-flex align-center">
              <!-- 👉 Search  -->
              <VTextField
                v-model="searchQuery"
                placeholder="Search Requests"
                density="compact"
                class="me-3"
              />
            </div>
          </VCardText>

          <VDivider />

          <VTable class="text-no-wrap">
            <!-- 👉 table head -->
            <thead>
              <tr>
                <th
                  scope="col"
                  style="inline-size: 48px;"
                >
                  <VCheckbox
                    :model-value="selectAllUser"
                    :indeterminate="(users.length !== selectedRows.length) && !!selectedRows.length"
                    class="mx-1"
                    @click="selectUnselectAll"
                  />
                </th>
                <th scope="col">
                  Request ID
                </th>
                <th scope="col">
                  Username
                </th>
                <th scope="col">
                  Fanpage name
                </th>
                <th scope="col">
                  Fanpage type
                </th>
                <th scope="col">
                  Time & Date
                </th>
                <th scope="col">
                  Options
                </th>
              </tr>
            </thead>

            <!-- 👉 table body -->
            <tbody>
              <tr
                v-for="user in users"
                :key="user.id"
              >
                <!-- 👉 Checkbox -->
                <td>
                  <VCheckbox
                    :id="`check${user.id}`"
                    :model-value="selectedRows.includes(`check${user.id}`)"
                    class="mx-1"
                    @click="addRemoveIndividualCheckbox(`check${user.id}`)"
                  />
                </td>

                <!-- 👉 User -->
                <td>
                  <div class="d-flex align-center">
                    <VAvatar
                      variant="tonal"
                      :color="resolveUserRoleVariant(user.role).color"
                      class="me-3"
                      size="34"
                    >
                      <VImg
                        v-if="user.avatar"
                        :src="user.avatar"
                      />
                      <span
                        v-else
                        class="text-sm"
                      >{{ avatarText(user.fullName) }}</span>
                    </VAvatar>

                    <div class="d-flex flex-column">
                      <h6 class="text-sm">
                        <RouterLink
                          :to="{ name: 'apps-user-view-id', params: { id: user.id } }"
                          class="font-weight-medium user-list-name"
                        >
                          {{ user.fullName }}
                        </RouterLink>
                      </h6>
                      <span class="text-xs text-medium-emphasis">{{ user.email }}</span>
                    </div>
                  </div>
                </td>

                <!-- 👉 Role -->
                <td>
                  <VAvatar
                    variant="tonal"
                    :color="resolveUserRoleVariant(user.role).color"
                    class="me-3"
                    size="30"
                  >
                    <VIcon
                      :icon="resolveUserRoleVariant(user.role).icon"
                      :color="resolveUserRoleVariant(user.role).color"
                      size="18"
                    />
                  </VAvatar>
                  <span class="text-capitalize text-base">{{ user.role }}</span>
                </td>

                <!-- 👉 Plan -->
                <td class="text-capitalize text-high-emphasis">
                  <span class="text-base">{{ user.currentPlan }}</span>
                </td>

                <!-- 👉 Billing -->
                <td>
                  <span class="text-base text-high-emphasis">{{ user.billing }}</span>
                </td>

                <!-- 👉 Status -->
                <td>
                  <VChip
                    :color="resolveUserStatusVariant(user.status)"
                    density="compact"
                    label
                    class="text-uppercase"
                  >
                    {{ user.status }}
                  </VChip>
                </td>

                <!-- 👉 Actions -->
                <td
                  class="text-center"
                  style="inline-size: 80px;"
                >
                  <VBtn
                    icon="bx-check-circle"
                    variant="text"
                    color="success"
                    @click="isDialogAcceptVisible = true"
                  />

                  <VBtn
                    icon="bx-window-close"
                    variant="text"
                    color="error"
                    @click="isDialogVisible = true"
                  />
                </td>
              </tr>
            </tbody>

            <!-- 👉 table footer  -->
            <tfoot v-show="!users.length">
              <tr>
                <td
                  colspan="7"
                  class="text-center text-body-1"
                >
                  No data available
                </td>
              </tr>
            </tfoot>
          </VTable>

          <VDialog
            v-model="isDialogVisible"
            max-width="600"
          >
            <!-- Dialog Content -->
            <VCard title="Block Fanpage">
              <DialogCloseBtn
                variant="text"
                size="small"
                @click="isDialogVisible = false"
              />

              <VCardText>
                <VRow>
                  <VCol cols="12">
                    <VTextarea
                      v-model="reason"
                      label="Reason"
                    />
                  </VCol>
                </VRow>
              </VCardText>

              <VCardText class="d-flex justify-end gap-2">
                <VBtn
                  color="secondary"
                  variant="tonal"
                  @click="isDialogVisible = false"
                >
                  Close
                </VBtn>
                <VBtn @click="isDialogVisible = false">
                  Save
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

          <!-- SECTION Pagination -->
          <VCardText class="d-flex flex-wrap justify-end gap-4 pa-2">
            <!-- 👉 Rows per page -->
            <div
              class="d-flex align-center"
              style="inline-size: 171px;"
            >
              <span class="text-no-wrap text-sm me-3">Rows per page:</span>
              <VSelect
                v-model="rowPerPage"
                density="compact"
                class="per-page-select"
                variant="plain"
                :items="[10, 20, 30, 50]"
              />
            </div>

            <!-- 👉 Pagination and pagination meta -->
            <div class="d-flex align-center">
              <h6 class="text-sm font-weight-regular">
                {{ paginationData }}
              </h6>
            </div>
            <VPagination
              v-model="currentPage"
              size="small"
              :total-visible="1"
              :length="totalPage"
              @next="selectedRows = []"
              @prev="selectedRows = []"
            />
          </VCardText>
          <!-- !SECTION -->
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
