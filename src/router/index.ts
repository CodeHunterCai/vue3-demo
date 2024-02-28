import { createRouter, createWebHistory } from 'vue-router'
import publicRoutes from './PublicRoutes'
import authRoutes from './modules/AuthRoutes'

const routes = [...publicRoutes, ...authRoutes]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes
})

export { routes }

export default router
