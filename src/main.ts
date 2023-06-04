import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './assets/main.css';
import '@/helpers/http';

import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount('#app');
