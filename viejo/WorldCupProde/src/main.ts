import { createApp } from 'vue'
import { createPinia } from 'pinia'
import axios from './plugins/axios'

import App from './App.vue'
import router from './router'

import './assets/main.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(axios, {
    baseUrl: 'https://localhost:3000',
})

app.mount('#app')
