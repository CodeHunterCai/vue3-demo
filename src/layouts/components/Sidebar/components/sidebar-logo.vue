<template>
  <div class="logo-container">
    <img src="@/assets/logo.png" class="logo-image" />
    <span class="logo-title"> {{ appTitle }}</span>
  </div>
</template>

<script lang="ts" setup>
const appTitle = import.meta.env.VITE_GLOB_APP_TITLE
</script>

<style lang="scss" scoped>
.logo-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  height: $navbar-height;
  padding-left: $sidebar-left-padding;
  background-color: $sidebar-logo-background;

  .logo-image {
    width: 20px;
    height: 20px;
  }

  .logo-title {
    flex-shrink: 0; /* 防止容器在空间不足时缩小 */
    margin-left: 10px;
    font-size: 14px;
    font-weight: bold;
    color: white;
  }
}
</style>
