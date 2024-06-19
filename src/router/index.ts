import { createRouter, createWebHistory } from 'vue-router'
import { staticRoutes } from './modules'
import AxiosCanceler from '@/api/helper/axios-cancel'
import { GlobalStore } from '@/stores'

const axiosCanceler = new AxiosCanceler()

const routes = [...staticRoutes]

const router = createRouter({
  history: createWebHistory(),
  routes: routes
})

router.beforeEach(async (to, from, next) => {
  // 在跳转路由之前，清除所有的请求
  axiosCanceler.removeAllPending()

  const globalStore = GlobalStore()

  // await globalStore.getUserInfoFromServerAsync()

  // 6.正常访问页面
  next()
})

export { routes }

export default router
