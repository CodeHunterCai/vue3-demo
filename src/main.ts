import { createApp } from 'vue'
import App from './App.vue'
import pinia from '@/stores/index'
import i18n from './i18n'
import router from './router'
import ElementPlus from 'element-plus'

import * as ElementPlusIconsVue from '@element-plus/icons-vue'

import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/dark/css-vars.css'
import '@/styles/index.scss'

const app = createApp(App)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.use(pinia)
app.use(i18n)
app.use(ElementPlus)
app.use(router)

app.mount('#app')
