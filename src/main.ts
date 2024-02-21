import '@/assets/css/reset.scss'

import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import pinia from '@/stores/index'
import i18n from './i18n'
import router from './router'

const app = createApp(App)

app.use(pinia)
app.use(i18n)
app.use(ElementPlus)
app.use(router)

app.mount('#app')
