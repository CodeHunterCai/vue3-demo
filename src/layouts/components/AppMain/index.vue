<template>
  <div class="app-main-container">
    <router-view>
      <template #default="{ Component, route }">
        <keep-alive>
          <component :is="Component" :key="route.path" />
        </keep-alive>
      </template>
    </router-view>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss"></style>
