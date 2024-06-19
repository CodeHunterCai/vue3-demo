<template>
  <div class="app-main-container">
    <router-view>
      <template #default="{ Component, route }">
        <component :is="Component" :key="route.path" />
      </template>
    </router-view>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss"></style>
