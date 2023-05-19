import { createApp } from 'vue'
import router from './router'
import { createPinia } from 'pinia'
import App from './App.vue'

import './css/style.css'
import 'vue3-toastify/dist/index.css';

const pinia = createPinia();
const app = createApp(App)
app.use(router)
app.use(pinia)
app.mount('#app')
