<template>
  <div class="navbar-content-container">
    <div class="fullscreen" @click="toggleFullscreen">
      <svg-icon :icon-class="isFullscreen ? 'exit-fullscreen' : 'fullscreen'" />
    </div>

    <LanguageSelect class="language-select" />

    <el-dropdown trigger="click">
      <div class="flex-center ml-1">
        <img
          src="@/assets/avatar.gif"
          width="40px"
          height="40px"
          class="rounded-md cursor-pointer"
        />

        <el-icon class="cursor-pointer">
          <CaretBottom />
        </el-icon>
      </div>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item @click="logout">
            {{ $t('system.退出登录') }}
          </el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script setup lang="ts">
import { useFullscreen } from '@vueuse/core'
import LanguageSelect from './language-select.vue'
import { GlobalStore } from '@/stores'

const globalStore = GlobalStore()
const { isFullscreen, toggle } = useFullscreen()

function toggleFullscreen() {
  toggle()
}

function logout() {
  globalStore.deleteUser()
  globalStore.logoutAsync()
  globalStore.jumpToSsoLogin()
}
</script>

<style lang="scss" scoped>
.navbar-content-container {
  display: flex;
  flex-direction: row;
  align-items: center;

  .fullscreen {
    margin-right: 15px;
  }

  .language-select {
    margin-right: 15px;
  }
}
</style>
