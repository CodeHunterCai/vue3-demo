<template>
  <div class="layout-container">
    <Sidebar class="sidebar-container" />
    <div class="main-container">
      <div class="navbar-container"></div>
      <div class="main-content-container"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Sidebar from './components/Sidebar/index.vue'
</script>

<style scoped lang="scss">
.layout-container {
  display: flex;
  flex-direction: row;
  width: 100%;
  min-width: 1024px;
  height: 100%;
  overflow: hidden;

  .sidebar-container {
    flex: none;
    width: $sidebar-width;
    height: 100%;
    overflow: hidden;
    background-color: var(--menu-background);
  }

  .main-container {
    display: flex;
    flex-direction: column;
    flex: auto;
    height: 100%;
    overflow: hidden;

    .navbar-container {
      width: 100%;
      height: $navbar-height;
      overflow: hidden;
    }

    .main-content-container {
      flex: auto;
      width: 100%;
      overflow: auto;
    }
  }
}
</style>
