import type { RouteRecordRaw } from 'vue-router'
import Layout from '@/components/layout/index.vue'

const groupOne: RouteRecordRaw = {
  name: 'groupOne',
  path: '/groupOne',
  component: Layout,
  meta: {
    title: '一组',
    isMenu: true
  },
  children: [
    {
      name: 'breadcrumb',
      path: '/groupOne/breadcrumb',
      meta: {
        title: '动态面包屑',
        isMenu: true
      },
      component: () => import('@/views/dy-menus/index.vue')
    },
    {
      name: 'internationalization',
      path: '/groupOne/internationalization',
      meta: {
        title: '国际化',
        isMenu: true
      },
      component: () => import('@/views/dy-menus/index.vue')
    }
  ]
}

export default groupOne