<script setup>
import { useGenerateImageVariant } from '@core/composable/useGenerateImageVariant'
import sittingGirlWithLaptopDark from '@images/illustrations/sitting-girl-with-laptop-dark.png'
import sittingGirlWithLaptopLight from '@images/illustrations/sitting-girl-with-laptop-light.png'

const isCurrentPasswordVisible = ref(false)
const isNewPasswordVisible = ref(false)
const isConfirmPasswordVisible = ref(false)
const currentPassword = ref('')
const newPassword = ref('')
const confirmPassword = ref('')

const passwordRequirements = [
  'Minimum 8 characters long - the more, the better',
  'At least one lowercase character',
  'At least one number, symbol, or whitespace character',
]

const serverKeys = [
  {
    name: 'Server Key 1',
    key: '23eaf7f0-f4f7-495e-8b86-fad3261282ac',
    createdOn: '28 Apr 2021, 18:20 GTM+4:10',
    permission: 'Full Access',
  },
  {
    name: 'Server Key 2',
    key: 'bb98e571-a2e2-4de8-90a9-2e231b5e99',
    createdOn: '12 Feb 2021, 10:30 GTM+2:30',
    permission: 'Read Only',
  },
  {
    name: 'Server Key 3',
    key: '2e915e59-3105-47f2-8838-6e46bf83b711',
    createdOn: '28 Dec 2020, 12:21 GTM+4:10',
    permission: 'Full Access',
  },
]

const recentDevices = [
  {
    browser: 'Chrome on Windows',
    device: 'Dell XPS 15',
    location: 'New York, NY',
    recentActivity: '28 Apr 2022, 18:20',
    deviceIcon: {
      icon: 'bx-laptop',
      color: 'warning',
    },
  },
  {
    browser: 'Chrome on Android',
    device: 'Google Pixel 3a',
    location: 'Los Angeles, CA',
    recentActivity: '20 Apr 2022, 10:20',
    deviceIcon: {
      icon: 'bxl-android',
      color: 'success',
    },
  },
  {
    browser: 'Chrome on iPhone',
    device: 'iPhone 12x',
    location: 'San Francisco, CA',
    recentActivity: '16 Apr 2022, 04:20',
    deviceIcon: {
      icon: 'bxl-apple',
      color: 'error',
    },
  },
  {
    browser: 'Chrome on MacOS',
    device: 'Apple iMac',
    location: 'New York, NY',
    recentActivity: '28 Apr 2022, 18:20',
    deviceIcon: {
      icon: 'bx-desktop',
      color: 'info',
    },
  },
  {
    browser: 'Chrome on MacOs',
    device: 'Macbook Pro',
    location: 'Los Angeles, CA',
    recentActivity: '20 Apr 2022, 10:20',
    deviceIcon: {
      icon: 'bx-laptop',
      color: 'warning',
    },
  },
  {
    browser: 'Chrome on Android',
    device: 'Oneplus 9 Pro',
    location: 'San Francisco, CA',
    recentActivity: '16 Apr 2022, 04:20',
    deviceIcon: {
      icon: 'bxl-android',
      color: 'success',
    },
  },
]

// 👉 Change the image as per theme change
const sittingGirlImg = useGenerateImageVariant(sittingGirlWithLaptopLight, sittingGirlWithLaptopDark)
const isOneTimePasswordDialogVisible = ref(false)
</script>

<template>
  <VRow>
    <!-- SECTION: Change Password -->
    <VCol cols="12">
      <VCard title="Change Password">
        <VForm>
          <VCardText class="pt-0">
            <!-- 👉 Current Password -->
            <VRow>
              <VCol
                cols="12"
                md="6"
              >
                <!-- 👉 current password -->
                <VTextField
                  v-model="currentPassword"
                  :type="isCurrentPasswordVisible ? 'text' : 'password'"
                  :append-inner-icon="isCurrentPasswordVisible ? 'bx-hide' : 'bx-show'"
                  label="Current Password"
                  @click:append-inner="isCurrentPasswordVisible = !isCurrentPasswordVisible"
                />
              </VCol>
            </VRow>

            <!-- 👉 New Password -->
            <VRow>
              <VCol
                cols="12"
                md="6"
              >
                <!-- 👉 new password -->
                <VTextField
                  v-model="newPassword"
                  :type="isNewPasswordVisible ? 'text' : 'password'"
                  :append-inner-icon="isNewPasswordVisible ? 'bx-hide' : 'bx-show'"
                  label="New Password"
                  @click:append-inner="isNewPasswordVisible = !isNewPasswordVisible"
                />
              </VCol>

              <VCol
                cols="12"
                md="6"
              >
                <!-- 👉 confirm password -->
                <VTextField
                  v-model="confirmPassword"
                  :type="isConfirmPasswordVisible ? 'text' : 'password'"
                  :append-inner-icon="isConfirmPasswordVisible ? 'bx-hide' : 'bx-show'"
                  label="Confirm New Password"
                  @click:append-inner="isConfirmPasswordVisible = !isConfirmPasswordVisible"
                />
              </VCol>
            </VRow>
          </VCardText>

          <!-- 👉 Password Requirements -->
          <VCardText>
            <p class="text-base">
              Password Requirements:
            </p>

            <ul class="d-flex flex-column gap-y-4">
              <li
                v-for="item in passwordRequirements"
                :key="item"
                class="d-flex"
              >
                <div>
                  <VIcon
                    size="8"
                    icon="bxs-circle"
                    class="me-3"
                  />
                </div>
                <span>{{ item }}</span>
              </li>
            </ul>
          </VCardText>

          <!-- 👉 Action Buttons -->
          <VCardText class="d-flex flex-wrap gap-4">
            <VBtn>Save changes</VBtn>

            <VBtn
              type="reset"
              color="secondary"
              variant="tonal"
            >
              Reset
            </VBtn>
          </VCardText>
        </VForm>
      </VCard>
    </VCol>
    <!-- !SECTION -->

    <!-- SECTION Two-steps verification -->
    <VCol cols="12">
      <VCard title="Two-steps verification">
        <VCardText>
          <p>
            Two factor authentication is not enabled yet.
          </p>
          <p class="mb-6">
            Two-factor authentication adds an additional layer of security to your account by requiring more than just a password to log in.
            <a
              href="javascript:void(0)"
              class="text-decoration-none"
            >Learn more.</a>
          </p>

          <VBtn @click="isOneTimePasswordDialogVisible = true">
            Enable 2FA
          </VBtn>
        </VCardText>
      </VCard>
    </VCol>
    <!-- !SECTION -->
  </VRow>

  <!-- SECTION Enable One time password -->
  <TwoFactorAuthDialog v-model:isDialogVisible="isOneTimePasswordDialogVisible" />
  <!-- !SECTION -->
</template>
