// 引入库
import { createApp } from 'vue'
import router from './router.js'
// 引入样式（tailwind自带类似于normalize.css的样式重置功能）
import 'tailwindcss/tailwind.css'
// import 'S/theme/index.css' // 自定义ElementUI主题
// 引入根组件
import App from './App.vue'
// vlevin @ 2020-06-17 组件库
import { ElButton, ElMessage } from 'element-plus'
import locale from 'element-plus/lib/locale'
import lang from 'element-plus/lib/locale/lang/zh-cn'
import 'dayjs/locale/zh-cn'
import 'element-plus/lib/theme-chalk/index.css'
// vlevin @ 2020-09-01 自定义组件及方法
import fetchData from 'S/utils/fetchData.js'
// vlevin @ 2021-04-07 ElementUI语言
locale.use(lang)
const app = createApp(App)
  .use(router)
  .use(ElButton)
  .use(ElMessage)
app.config.globalProperties.$fetchData = fetchData
app.mount('#app')
