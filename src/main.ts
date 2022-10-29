import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'normalize.css'
import '@/assets/styles/init.scss'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import 'element-plus/theme-chalk/index.css'

const app = createApp(App)

// 完整引入 element-plus 图标
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  // 全局注册
  app.component(key, component)
}

app.use(store)
app.use(router)
app.mount('#app')
