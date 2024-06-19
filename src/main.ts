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

import 'virtual:uno.css'

// 本地SVG图标
import 'virtual:svg-icons-register'
import SvgIcon from '@/components/svg-icon/index.vue'

import { translateISOTimeToLocalTime } from '@/utils/util'

const app = createApp(App)

app.component('SvgIcon', SvgIcon)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.use(pinia)
app.use(i18n)
app.use(ElementPlus)
app.use(router)

app.config.globalProperties.translateISOTimeToLocalTime = translateISOTimeToLocalTime

app.mount('#app')
