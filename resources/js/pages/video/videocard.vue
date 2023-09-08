<script setup>
import avatar1 from '@images/avatars/avatar-1.png'
import avatar2 from '@images/avatars/avatar-2.png'
import avatar3 from '@images/avatars/avatar-3.png'
import avatar4 from '@images/avatars/avatar-4.png'
import event from '@images/cards/event.png'

const moreList = [
  {
    title: 'Share',
    value: 'Share',
  },
  {
    title: 'Refresh',
    value: 'Refresh',
  },
  {
    title: 'Update',
    value: 'Update',
  },
]

const tags = [
  {
    title: 'TECHNICAL',
    color: 'success',
  },
  {
    title: 'EXCEL',
    color: 'primary',
  },
  {
    title: 'ACCOUNT',
    color: 'info',
  },
]

const avatarGroups = [
  {
    img: avatar1,
    name: 'John Doe',
  },
  {
    img: avatar2,
    name: 'Jennie o\'brien',
  },
  {
    img: avatar3,
    name: 'Peter Harper',
  },
  {
    img: avatar4,
    name: 'Vivian Padilla',
  },
]
</script>

<template>
  <VCard
    title="Olivia Shared Event"
    subtitle="07 Sep 2020 at 10:30 AM"
  >
    <template #prepend>
      <VAvatar :image="avatar1" />
    </template>

    <template #append>
      <div class="me-n3 mt-n8">
        <MoreBtn :menu-list="moreList" />
      </div>
    </template>

    <VImg
      cover
      height="280"
      :src="event"
    />
  </VCard>
</template>

<style lang="scss">
.event-date {
  position: absolute;
  padding: 0.6rem;
  background-color: rgb(var(--v-theme-surface));
  block-size: 64px;
  inline-size: 58px;
  inset-block-start: -2rem;

  h6 {
    line-height: normal;
  }
}
</style>
