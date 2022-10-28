import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Demo from '@/views/demo/index.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/demo',
    name: 'Demo',
    component: Demo
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
