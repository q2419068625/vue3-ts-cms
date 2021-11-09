import { createApp } from 'vue'
import App from './App.vue'
import { registerApp } from '@/global/index'
import router from '@/router/index'
import store from '@/store/index'
import { setupStore } from '@/store/index'
import 'normalize.css'
import '@/styles/index.scss'
const app = createApp(App)

registerApp(app)

app.use(router)
app.use(store)
setupStore()
app.mount('#app')
