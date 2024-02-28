<template>
  <div class="navbar-content-container">
    <span class="welcome">{{ `${$t('system.欢迎')}${globalStore?.userInfo?.username}` }}</span>
  </div>
</template>

<script setup lang="ts">
import { GlobalStore } from '@/stores'
const globalStore = GlobalStore()
</script>

<style lang="scss" scoped>
.navbar-content-container {
  display: flex;
  flex-direction: row;
  align-items: center;

  .welcome {
    font-size: 14px;
  }
}
</style>
