import { createApp } from 'vue'
import App from './App.vue'
import { registerApp } from '@/global/index'
import router from '@/router/index'
import store from '@/store/index'
import { setupStore } from '@/store/index'
import 'normalize.css'
import '@/styles/index.scss'

import registerProperties from '@/global/register-properties'
const app = createApp(App)

registerApp(app)
registerProperties(app)
app.use(store)
setupStore()
app.use(router)
app.mount('#app')
