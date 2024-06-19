<template>
  <el-icon size="14">
    <component v-if="icon" :is="icon" />
  </el-icon>
  <span class="title">{{ title && $t(title) }}</span>
</template>

<script setup lang="ts">
const props = defineProps({
  icon: {
    type: String,
    required: false
  },
  title: {
    type: String,
    required: true
  }
})
</script>

<style lang="scss" scoped>
.title {
  padding-right: 10px;
}
</style>
