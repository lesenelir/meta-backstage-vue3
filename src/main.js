import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import router from './router'
import store from './store'

createApp(App).use(ElementPlus, { locale: zhCn }).use(store).use(router).mount('#app')
