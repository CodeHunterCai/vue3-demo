import { createRouter, createWebHistory } from 'vue-router'
import staticRoutes from './modules/StaticRoutes'
import { axiosCanceler } from '@/api'
import { GlobalStore } from '@/stores'
import { AuthStore } from '@/stores'

const SsoLoginUrl = import.meta.env.VITE_SSO_LOGIN_URL

const routes = [...staticRoutes]

const router = createRouter({
  history: createWebHistory(),
  routes: routes
})

router.beforeEach(async (to, from, next) => {
  // 在跳转路由之前，清除所有的请求
  axiosCanceler.removeAllPending()

  const globalStore = GlobalStore()

  // 判断是否有Token，没有重定向到login
  // if (!globalStore.token) {
  //   window.location.href = SsoLoginUrl
  //   return false
  // }

  // 如果没有菜单列表，就重新请求菜单列表并添加动态路由
  const authStore = AuthStore()
  authStore.generateAuthMenuList()
  // if (!authStore.authMenuList.length) {
  //   await authStore.generateAuthMenuList()
  //   // await authStore.setAuthMenuList()
  //   // await initDynamicRouter()
  //   return next({ ...to, replace: true })
  // }

  // 6.正常访问页面
  next()
})

export { routes }

export default router
