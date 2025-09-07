import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createPinia } from 'pinia'
import vuetify from './plugins/vuetify'
import router from "./router";



const pinia = createPinia()


createApp(App).use(pinia).use(vuetify).use(router).mount('#app')
