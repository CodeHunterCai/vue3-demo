<template>
  <el-menu
    class="custom-el-menu"
    router
    :unique-opened="true"
    :background-color="variables['menu-background']"
    :text-color="variables['menu-text']"
    :active-text-color="variables['menu-active-text']"
  >
    <SidebarMenuItem v-for="route in routes" :key="route.path" :route="route" />
  </el-menu>
</template>

<script lang="ts" setup>
import variables from '@/styles/variables.module.scss'
import { routes } from '@/router/index'
import SidebarMenuItem from './SidebarMenuItem.vue'
</script>

<style scoped>
.custom-el-menu {
  border-right-width: 0;
}
</style>
