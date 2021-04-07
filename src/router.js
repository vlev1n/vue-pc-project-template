import { createRouter, createWebHashHistory } from 'vue-router'
// vlevin @ 2021-02-16 页面组件
import Home from 'S/pages/Home.vue'
const routes = [
  {
    path: '/',
    component: Home,
  },
]
const router = createRouter({
  history: createWebHashHistory(),
  routes,
})
export default router
