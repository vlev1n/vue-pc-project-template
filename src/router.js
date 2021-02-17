import Vue from 'vue'
import Router from 'vue-router'
// vlevin @ 2021-02-16 页面组件
import Home from 'S/pages/Home.vue'
Vue.use(Router)
const router = new Router({
  routes: [
    {
      path: '/',
      component: Home,
    },
  ],
})
export default router
