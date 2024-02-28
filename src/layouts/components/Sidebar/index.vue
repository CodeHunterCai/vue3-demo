<template>
  <div class="sidebar-container">
    <SidebarLogo />
    <SidebarMenu />
  </div>
</template>

<script setup lang="ts">
import SidebarLogo from './components/SidebarLogo.vue'
import SidebarMenu from './components/SidebarMenu.vue'
</script>

<style scoped lang="scss">
.sidebar-container {
  display: flex;
  flex-direction: column;
  width: $sidebar-width;
  height: 100%;
  overflow: hidden;
  background-color: var(--menu-background);
}
</style>
