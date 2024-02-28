<template>
  <el-dropdown trigger="click" @command="handleLanguageChange">
    <div>
      <svg-icon icon-class="language" />
    </div>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item
          v-for="item in languageList"
          :key="item.value"
          :disabled="globalStore.language === item.value"
          :command="item.value"
        >
          {{ item.label }}
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { GlobalStore } from '@/stores'
import { languageList } from '@/i18n'

const globalStore = GlobalStore()
const { locale } = useI18n()

function handleLanguageChange(lang: string) {
  locale.value = lang
  globalStore.setLanguage(lang)
}
</script>
