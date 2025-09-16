import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import vuetify from './plugins/vuetify'
import router from "./router";
import '@mdi/font/css/materialdesignicons.css'
import MasonryWall from '@yeger/vue-masonry-wall'
import './style.css';




const pinia = createPinia()


createApp(App).use(pinia).use(vuetify).use(MasonryWall).use(router).mount('#app')
