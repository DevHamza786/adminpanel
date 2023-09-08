<script setup lang="ts">
import PermissionSetting from './permission-setting.vue';

const currentTab = ref(0)
</script>

<template>
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
          <PermissionSetting />
        </VWindowItem>

        <VWindowItem>
          <p>
            Morbi nec metus. Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis tellus, vitae iaculis lacus elit id tortor. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Nunc sed turpis.
          </p>
        </VWindowItem>

        <VWindowItem>
          <p>
            Fusce a quam. Phasellus nec sem in justo pellentesque facilisis. Nam eget dui. Proin viverra, ligula sit amet ultrices semper, ligula arcu tristique sapien, a accumsan nisi mauris ac eros. In dui magna, posuere eget, vestibulum et, tempor auctor, justo.
          </p>
        </VWindowItem>
      </VWindow>
    </VCol>
  </VRow>
</template>

