import { createApp } from 'vue'
import store from './store'
import App from './App.vue'
import router from './router'
import './registerServiceWorker'

createApp(App).use(router).use(store).mount('#app')
