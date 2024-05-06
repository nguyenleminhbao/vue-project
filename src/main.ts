import './assets/base.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { registerLayout } from './utils/import'

const app = createApp(App)

registerLayout(app)
app.use(router)
app.mount('#app')
