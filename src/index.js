// 引入库
import Vue from 'vue'
import router from './router.js'
// 引入样式（tailwind自带类似于normalize.css的样式重置功能）
import 'tailwindcss/tailwind.css'
// 引入根组件
import App from './App.vue'
// vlevin @ 2020-06-17 组件库
import { Button, Message } from 'element-ui'
// vlevin @ 2020-09-01 自定义组件及方法
import fetchData from 'S/utils/fetchData.js'
Vue.use(Button)
Vue.prototype.$message = Message
Vue.prototype.$fetchData = fetchData
const vm = new Vue({
  render: (h) => h(App),
  router,
}).$mount('#app')
Vue.use({ vm })
