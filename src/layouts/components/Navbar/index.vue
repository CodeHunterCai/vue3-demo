<template>
  <div class="navbar-container">
    <NavbarLeft />
    <NavbarRight />
  </div>
</template>

<script setup lang="ts">
import NavbarLeft from './components/navbar-left.vue'
import NavbarRight from './components/navbar-right.vue'
</script>

<style scoped lang="scss">
.navbar-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  height: $navbar-height;
  padding-left: 10px;
  padding-right: 20px;
  border-bottom: 1px solid var(--el-border-color-light);
  overflow: hidden;
  background: var(--el-bg-color);
}
</style>
