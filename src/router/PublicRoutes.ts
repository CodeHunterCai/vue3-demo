import layout from '@/layouts/index.vue'

const publicRoutes = [
  {
    path: '/',
    redirect: '/home',
    meta: {
      hidden: true
    }
  },
  {
    path: '/home',
    name: 'home',
    redirect: '/home/index',
    component: layout,
    meta: {
      title: 'menu.home',
      icon: 'HomeFilled'
    },
    children: [
      {
        path: '/home/index',
        name: 'home_index',
        component: () => import('@/views/home/index.vue'),
        meta: {
          hidden: true
        }
      }
    ]
  }
]

export default publicRoutes
