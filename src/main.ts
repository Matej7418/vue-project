import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { store, key } from './store'
import VCalendar from 'v-calendar';
import axios from 'axios'

axios.defaults.maxContentLength = 1000000;

createApp(App).use(store, key).use(router).use(VCalendar, {}).mount('#app')
