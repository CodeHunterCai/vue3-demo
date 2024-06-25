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

  if (to.path === '/404') {
    return next()
  }

  const globalStore = GlobalStore()

  // await globalStore.getUserInfoFromServerAsync()

  if (to.matched.length === 0) {
    return from.name ? next({ name: from.name }) : next('/404')
  } else {
    return next()
  }
})

export { routes }

export default router
