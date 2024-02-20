import { createApp } from 'vue'
import App from './App.vue'
import router from './modules/router'
import store from './modules/store'

createApp(App).use(store).use(router).mount('#app')
