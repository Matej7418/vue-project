import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VCalendar from 'v-calendar';

createApp(App).use(router).use(store).use(VCalendar, {}).mount('#app')
