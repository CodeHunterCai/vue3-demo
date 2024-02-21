<script setup lang="ts">
import { computed } from 'vue'
import { RouterView } from 'vue-router'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import en from 'element-plus/es/locale/lang/en'
import { getBrowserLang } from '@/utils/util'
import { GlobalStore } from '@/stores'
const globalStore = GlobalStore()

const i18nLocal = computed(() => {
  if (globalStore.language && globalStore.language === 'zh') return zhCn
  if (globalStore.language && globalStore.language === 'en') return en
  return getBrowserLang() === 'zh' ? zhCn : en
})
</script>

<template>
  <el-config-provider :locale="i18nLocal" size="default">
    <router-view />
  </el-config-provider>
</template>

<style scoped lang="scss"></style>
