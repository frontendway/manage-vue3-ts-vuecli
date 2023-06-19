import personalCenter from './personal-center'
import home from './home'
import groupOne from './group-one'
import type { RouteRecordRaw } from 'vue-router'

const dynamicRoutes: RouteRecordRaw[] = [
  home,
  personalCenter,
  groupOne
]

export default dynamicRoutes
