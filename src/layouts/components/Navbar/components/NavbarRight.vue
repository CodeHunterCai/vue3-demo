<template>
  <div class="navbar-content-container">
    <LanguageSelect class="language-container" />

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
import LanguageSelect from './LanguageSelect.vue'

function logout() {
  console.log(111)
}
</script>

<style lang="scss" scoped>
.navbar-content-container {
  display: flex;
  flex-direction: row;
  align-items: center;

  .language-container {
    margin-right: 10px;
  }
}
</style>
