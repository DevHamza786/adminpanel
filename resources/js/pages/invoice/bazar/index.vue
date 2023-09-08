<script setup>
import { useUserListStore } from '@/views/apps/user/useUserListStore'
import { avatarText } from '@core/utils/formatters'
import { VNodeRenderer } from '@layouts/components/VNodeRenderer'
import { themeConfig } from '@themeConfig'


import { useInvoiceStore } from '@/views/apps/invoice/useInvoiceStore'

const invoiceListStore = useInvoiceStore()
const route = useRoute()
const invoiceData = ref()
const paymentDetails = ref()
const isAddPaymentSidebarVisible = ref(false)
const isSendPaymentSidebarVisible = ref(false)

// 👉 fetchInvoice
invoiceListStore.fetchInvoice(Number(5036)).then(response => {
  invoiceData.value = response.data.invoice
  paymentDetails.value = response.data.paymentDetails
}).catch(error => {
  console.log(error)
})

// 👉 Print Invoice
const printInvoice = () => {
  window.print()
}

// ℹ️ Your real data will contain this information
const purchasedProducts = [
  {
    name: 'Premium Branding Package',
    description: 'Branding & Promotion',
    qty: 1,
    hours: 15,
    price: 32,
  },
  {
    name: 'SMM',
    description: 'Social media templates',
    qty: 1,
    hours: 14,
    price: 28,
  },
  {
    name: 'Web Design',
    description: 'Web designing package',
    qty: 1,
    hours: 12,
    price: 24,
  },
  {
    name: 'SEO',
    description: 'Search engine optimization',
    qty: 1,
    hours: 5,
    price: 22,
  },
]

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
</script>

<template>
  <section>
    <VRow>
      <VCol cols="12">
        <VCard title="Invoice">
          <VCardText class="d-flex flex-wrap gap-4">
            <VSpacer />
            <div class="app-user-search-filter d-flex align-center">
              <!-- 👉 Search  -->
              <VTextField
                v-model="searchQuery"
                placeholder="Search On Invoice"
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
                  User ID
                </th>
                <th scope="col">
                  User Name
                </th>
                <th scope="col">
                  User Type
                </th>
                <th scope="col">
                  Method
                </th>
                <th scope="col">
                  Date & Time
                </th>
                <th scope="col">
                  Option
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
                  <VBtn @click="isDialogVisible = true">
                    View
                    <VIcon
                      end
                      icon="bx-show"
                    />
                  </VBtn> 
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
            max-width="1000"
          >
            <!-- Dialog Content -->
            <VCard>
              <DialogCloseBtn
                variant="text"
                size="small"
                @click="isDialogVisible = false"
              />

              <VCardText>
                <VRow>
                  <VCol cols="12">
                    <section v-if="invoiceData">
                      <VRow>
                        <VCol cols="12">
                          <VCard>
                            <!-- SECTION Header -->
                            <VCardText class="d-flex flex-wrap justify-space-between flex-column flex-sm-row print-row pa-10 pb-6">
                              <!-- 👉 Left Content -->
                              <div class="mb-4">
                                <div class="d-flex align-center mb-6">
                                  <!-- 👉 Logo -->
                                  <VNodeRenderer
                                    :nodes="themeConfig.app.logo"
                                    class="me-2"
                                  />

                                  <!-- 👉 Title -->
                                  <h6 class="app-title">
                                    {{ themeConfig.app.title }}
                                  </h6>
                                </div>

                                <!-- 👉 Address -->
                                <p class="mb-0">
                                  Office 149, 450 South Brand Brooklyn
                                </p>
                                <p class="mb-0">
                                  San Diego County, CA 91905, USA
                                </p>
                                <p class="mb-0">
                                  +1 (123) 456 7891, +44 (876) 543 2198
                                </p>
                              </div>

                              <!-- 👉 Right Content -->
                              <div class="mb-4">
                                <!-- 👉 Invoice ID -->
                                <h6 class="font-weight-medium text-xl">
                                  Invoice #{{ invoiceData.id }}
                                </h6>

                                <!-- 👉 Issue Date -->
                                <p class="my-3">
                                  <span>Date Issued: </span>
                                  <span>{{ invoiceData.issuedDate }}</span>
                                </p>

                                <!-- 👉 Due Date -->
                                <p>
                                  <span>Due Date: </span>
                                  <span>{{ invoiceData.dueDate }}</span>
                                </p>
                              </div>
                            </VCardText>
                            <!-- !SECTION -->

                            <VDivider />

                            <!-- 👉 Payment Details -->
                            <VCardText class="d-flex justify-space-between flex-wrap flex-column flex-sm-row print-row">
                              <div class="my-4 ms-4">
                                <h6 class="text-sm font-weight-semibold mb-3">
                                  Invoice To:
                                </h6>
                                <p class="mb-1">
                                  {{ invoiceData.client.name }}
                                </p>
                                <p class="mb-1">
                                  {{ invoiceData.client.company }}
                                </p>
                                <p class="mb-1">
                                  {{ invoiceData.client.address }}, {{ invoiceData.client.country }}
                                </p>
                                <p class="mb-1">
                                  {{ invoiceData.client.contact }}
                                </p>
                                <p class="mb-0">
                                  {{ invoiceData.client.companyEmail }}
                                </p>
                              </div>

                              <div class="ma-4">
                                <h6 class="text-sm font-weight-semibold mb-3">
                                  Bill To:
                                </h6>
                                <table>
                                  <tr>
                                    <td class="pe-4">
                                      Total Due:
                                    </td>
                                    <td>
                                      {{ paymentDetails.totalDue }}
                                    </td>
                                  </tr>
                                  <tr>
                                    <td class="pe-4">
                                      Bank Name:
                                    </td>
                                    <td>
                                      {{ paymentDetails.bankName }}
                                    </td>
                                  </tr>
                                  <tr>
                                    <td class="pe-4">
                                      Country:
                                    </td>
                                    <td>
                                      {{ paymentDetails.country }}
                                    </td>
                                  </tr>
                                  <tr>
                                    <td class="pe-4">
                                      IBAN:
                                    </td>
                                    <td>
                                      {{ paymentDetails.iban }}
                                    </td>
                                  </tr>
                                  <tr>
                                    <td class="pe-4">
                                      SWIFT Code:
                                    </td>
                                    <td>
                                      {{ paymentDetails.swiftCode }}
                                    </td>
                                  </tr>
                                </table>
                              </div>
                            </VCardText>

                            <!-- 👉 Table -->
                            <VDivider />

                            <VTable>
                              <thead>
                                <tr>
                                  <th scope="col">
                                    ITEM
                                  </th>
                                  <th scope="col">
                                    DESCRIPTION
                                  </th>
                                  <th
                                    scope="col"
                                    class="text-center"
                                  >
                                    HOURS
                                  </th>
                                  <th
                                    scope="col"
                                    class="text-center"
                                  >
                                    QTY
                                  </th>
                                  <th
                                    scope="col"
                                    class="text-center"
                                  >
                                    TOTAL
                                  </th>
                                </tr>
                              </thead>

                              <tbody>
                                <tr
                                  v-for="item in purchasedProducts"
                                  :key="item.name"
                                >
                                  <td class="text-no-wrap">
                                    {{ item.name }}
                                  </td>
                                  <td class="text-no-wrap">
                                    {{ item.description }}
                                  </td>
                                  <td class="text-center">
                                    {{ item.hours }}
                                  </td>
                                  <td class="text-center">
                                    {{ item.qty }}
                                  </td>
                                  <td class="text-center">
                                    ${{ item.price }}
                                  </td>
                                </tr>
                              </tbody>
                            </VTable>

                            <VDivider />

                            <!-- Total -->
                            <VCardText class="d-flex justify-space-between flex-column flex-sm-row print-row pt-8">
                              <div class="mb-2">
                                <div class="d-flex align-center mb-1">
                                  <h6 class="text-sm font-weight-semibold me-1">
                                    Salesperson:
                                  </h6>
                                  <span>Jenny Parker</span>
                                </div>
                                <p>Thanks for your business</p>
                              </div>

                              <div>
                                <table class="w-100">
                                  <tr>
                                    <td class="pe-16">
                                      Subtotal:
                                    </td>
                                    <td :class="$vuetify.locale.isRtl ? 'text-start' : 'text-end'">
                                      <h6 class="text-sm">
                                        $1800
                                      </h6>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td class="pe-16">
                                      Discount:
                                    </td>
                                    <td :class="$vuetify.locale.isRtl ? 'text-start' : 'text-end'">
                                      <h6 class="text-sm">
                                        $28
                                      </h6>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td class="pe-16">
                                      Tax:
                                    </td>
                                    <td :class="$vuetify.locale.isRtl ? 'text-start' : 'text-end'">
                                      <h6 class="text-sm">
                                        21%
                                      </h6>
                                    </td>
                                  </tr>
                                </table>

                                <VDivider class="mt-4 mb-3" />

                                <table class="w-100">
                                  <tr>
                                    <td class="pe-16">
                                      Total:
                                    </td>
                                    <td :class="$vuetify.locale.isRtl ? 'text-start' : 'text-end'">
                                      <h6 class="text-sm">
                                        $1690
                                      </h6>
                                    </td>
                                  </tr>
                                </table>
                              </div>
                            </VCardText>

                            <VDivider class="my-2" />

                            <VCardText>
                              <div class="d-flex">
                                <h6 class="text-sm font-weight-semibold me-1">
                                  Note:
                                </h6>
                                <span>It was a pleasure working with you and your team. We hope you will keep us in mind for future freelance projects. Thank You!</span>
                              </div>

                              <div class="d-flex flex-wrap justify-end d-print-none gap-4 mt-8">
                                <VBtn @click="printInvoice">
                                  Print
                                </VBtn>
                                <VBtn color="success">
                                  Download
                                </VBtn>
                              </div>
                            </VCardText>
                          </VCard>
                        </VCol>
                      </VRow>
                    </section>
                  </VCol>
                </VRow>
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
