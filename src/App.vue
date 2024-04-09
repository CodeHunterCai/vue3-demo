<template>
  <el-config-provider :locale="i18nLocal" size="default">
    <router-view />
  </el-config-provider>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { RouterView } from 'vue-router'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import en from 'element-plus/es/locale/lang/en'
import { getBrowserLang } from '@/utils/util'
import { GlobalStore } from '@/stores'
import { languageList } from '@/i18n'
const globalStore = GlobalStore()

const i18nLocal = computed(() => {
  if (globalStore.language && globalStore.language === languageList[0].value) return zhCn
  if (globalStore.language && globalStore.language === languageList[1].value) return en
  return getBrowserLang() === languageList[0].value ? zhCn : en
})
</script>

<style scoped lang="scss"></style>
