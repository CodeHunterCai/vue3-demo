<template>
  <div class="sidebar-container">
    <SidebarLogo />
    <SidebarMenu class="sidebar-menu" />
  </div>
</template>

<script setup lang="ts">
import SidebarLogo from './components/sidebar-logo.vue'
import SidebarMenu from './components/sidebar-menu.vue'
</script>

<style scoped lang="scss">
.sidebar-container {
  display: flex;
  flex-direction: column;
  width: $sidebar-width;
  height: 100%;
  overflow: hidden;
  background-color: var(--menu-background);

  .sidebar-menu {
    flex: auto;
    overflow: auto;
  }
}
</style>
