<template>
  <div class="layout-container">
    <Sidebar class="sidebar" />
    <div class="main-container">
      <Navbar class="navbar" />
      <AppMain class="app-main" />
    </div>
  </div>
</template>

<script setup lang="ts">
import Sidebar from './components/Sidebar/index.vue'
import Navbar from './components/Navbar/index.vue'
import AppMain from './components/AppMain/index.vue'
</script>

<style scoped lang="scss">
.layout-container {
  display: flex;
  flex-direction: row;
  width: 100%;
  min-width: 1024px;
  height: 100%;
  overflow: hidden;

  .sidebar {
    flex: none;
  }

  .main-container {
    display: flex;
    flex-direction: column;
    flex: auto;
    height: 100%;
    overflow: hidden;

    .navbar {
      flex: none;
    }

    .app-main {
      flex: auto;
      box-sizing: border-box;
      padding: 20px;
      overflow: auto;
    }
  }
}
</style>
