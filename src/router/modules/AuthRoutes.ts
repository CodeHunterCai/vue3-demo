import layout from '@/layouts/index.vue'

const authRoutes = [
  {
    path: '/auth',
    name: 'auth',
    redirect: '/auth/list',
    component: layout,
    meta: {
      title: 'menu.权限管理',
      icon: 'Avatar'
    },
    children: [
      {
        path: '/auth/list',
        name: 'auth_list',
        component: () => import('@/views/auth/index.vue'),
        meta: {
          title: 'menu.权限列表'
        }
      }
    ]
  }
]

export default authRoutes
