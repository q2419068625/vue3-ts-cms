import { createApp } from 'vue'
import App from './App.vue'
import { registerApp } from '@/global/index'
import router from '@/router/index'
import store from '@/store/index'
import CYRequest from '@/service/index'
import 'normalize.css'
// 单独引入loading 样式
import 'element-plus/theme-chalk/el-loading.css'
const app = createApp(App)

registerApp(app)

app.use(router)
app.use(store)
app.mount('#app')

interface DataType {
  data: any
  returnCode: string
  success: boolean
}
