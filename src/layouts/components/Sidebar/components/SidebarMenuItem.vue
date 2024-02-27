<template>
  <div v-if="route?.meta?.hidden !== true">
    <el-sub-menu v-if="hasShowingChild" :index="route.path" teleported>
      <template #title>
        <SidebarMenuItemTitle :icon="route?.meta?.icon" :title="route?.meta?.title" />
      </template>

      <SidebarMenuItem v-for="child in route.children" :key="child.path" :route="child" />
    </el-sub-menu>
    <el-menu-item v-else :index="route.path">
      <SidebarMenuItemTitle :icon="route?.meta?.icon" :title="route?.meta?.title" />
    </el-menu-item>
  </div>
</template>
<script setup lang="ts">
import { computed } from 'vue'
import SidebarMenuItemTitle from './SidebarMenuItemTitle.vue'

const props = defineProps({
  route: {
    type: Object,
    required: true
  }
})

const hasShowingChild = computed(() => {
  const route = props.route
  if (!route?.children?.length) {
    return false
  }
  const shownChildren = route.children.filter((childRoute: any) => {
    if (childRoute?.meta?.hidden) {
      return false
    }
    return true
  })
  if (shownChildren.length === 0) {
    return false
  }
  return true
})
</script>

<style lang="scss"></style>
