<script setup lang="ts">
import PermissionSetting from './permission-setting.vue';

const currentTab = ref(0)
const currentTab2 = ref(0)
</script>

<template>
  <VCard>
    <VTabs
      v-model="currentTab" 
      fixed-tabs
    >
      <VTab>
        Standard User
      </VTab>
      <VTab>
        Premium User
      </VTab>
      <VTab>
        Vip User
      </VTab>
    </VTabs>
    <VRow>
      <VCol cols="12">
        <VWindow v-model="currentTab">
          <VWindowItem>
            <VCard class="mx-2 my-2 ">
              <VRow>
                <VCol
                  cols="12"
                  sm="4"
                >
                  <VTabs
                    v-model="currentTab2"
                    direction="vertical"
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
                      Add More Section Option
                    </VTab>
                  </VTabs>
                </VCol>
    
                <VCol
                  cols="12"
                  sm="8"
                >
                  <VWindow v-model="currentTab2">
                    <VWindowItem>
                      <PermissionSetting />
                    </VWindowItem>
    
                    <VWindowItem>
                      <PermissionSetting />
                    </VWindowItem>
    
                    <VWindowItem>
                      <PermissionSetting />
                    </VWindowItem>
                  </VWindow>
                </VCol>
              </VRow>
            </VCard>
          </VWindowItem>
  
          <VWindowItem>
            <VCard class="mx-2 my-2 ">
              <VRow>
                <VCol
                  cols="12"
                  sm="4"
                >
                  <VTabs
                    v-model="currentTab2"
                    direction="vertical"
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
                      Add More Section Option
                    </VTab>
                  </VTabs>
                </VCol>
    
                <VCol
                  cols="12"
                  sm="8"
                >
                  <VWindow v-model="currentTab2">
                    <VWindowItem>
                      <PermissionSetting />
                    </VWindowItem>
    
                    <VWindowItem>
                      <PermissionSetting />
                    </VWindowItem>
    
                    <VWindowItem>
                      <PermissionSetting />
                    </VWindowItem>
                  </VWindow>
                </VCol>
              </VRow>
            </VCard>
          </VWindowItem>

          <VWindowItem>
            <VCard class="mx-2 my-2 ">
              <VRow>
                <VCol
                  cols="12"
                  sm="4"
                >
                  <VTabs
                    v-model="currentTab2"
                    direction="vertical"
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
                      Add More Section Option
                    </VTab>
                  </VTabs>
                </VCol>
    
                <VCol
                  cols="12"
                  sm="8"
                >
                  <VWindow v-model="currentTab2">
                    <VWindowItem>
                      <PermissionSetting />
                    </VWindowItem>
    
                    <VWindowItem>
                      <PermissionSetting />
                    </VWindowItem>
    
                    <VWindowItem>
                      <PermissionSetting />
                    </VWindowItem>
                  </VWindow>
                </VCol>
              </VRow>
            </VCard>
          </VWindowItem>
        </VWindow>
      </VCol>
    </VRow>
  </VCard>
</template>

