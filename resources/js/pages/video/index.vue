<script setup>
import { useUserListStore } from '@/views/apps/user/useUserListStore';
import AddVideo from './add-video.vue';
import VideoCard from './videocard.vue';

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

const currentTab = ref(0)

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

const isAddVideoVisible = ref(false)

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
    title: 'Session',
    stats: '21,459',
    percentage: +29,
    subtitle: 'Total Users',
  },
  {
    icon: 'bx-user-plus',
    color: 'error',
    title: 'Paid Users',
    stats: '4,567',
    percentage: +18,
    subtitle: 'Last week analytics',
  },
  {
    icon: 'bx-user-check',
    color: 'success',
    title: 'Active Users',
    stats: '19,860',
    percentage: -14,
    subtitle: 'Last week analytics',
  },
  {
    icon: 'bx-user-voice',
    color: 'warning',
    title: 'Pending Users',
    stats: '237',
    percentage: +42,
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
        lg="3"
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
        <VCard>
          <VCardText class="d-flex flex-wrap gap-4">
            <!-- 👉 Add user button -->
            <VBtn @click="isAddVideoVisible = true">
              Add Video
            </VBtn>
          </VCardText>
          <VDivider />
          <VTabs
            v-model="currentTab" 
            fixed-tabs
          >
            <VTab>
              All Uploaded Video
            </VTab>
            <VTab>
              All Live Stream
            </VTab>
            <VTab>
              Reported Videos
            </VTab>
          </VTabs>
          <VRow>
            <VCol cols="12">
              <VWindow v-model="currentTab">
                <VWindowItem>
                  <VCol
                    cols="12"
                    lg="12"
                  >
                    <VideoCard />
                  </VCol>
                </VWindowItem>

                <VWindowItem>
                  <VCol
                    cols="12"
                    lg="12"
                  >
                    <VideoCard />
                  </VCol>
                </VWindowItem>

                <VWindowItem>
                  <VCol
                    cols="12"
                    lg="12"
                  >
                    <VideoCard />
                  </VCol>
                </VWindowItem>
              </VWindow>
            </VCol>
          </VRow>
        </VCard>
      </VCol>
    </VRow>
    <!-- 👉 Add New Video -->
    <AddVideo
      v-model:isDrawerOpen="isAddVideoVisible"
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
