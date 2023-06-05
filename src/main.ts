import { createApp } from 'vue';
import { createPinia } from 'pinia';
import Antd from 'ant-design-vue';

import App from './App.vue';
import router from './router';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'ant-design-vue/dist/antd.css';
import './assets/main.css';
import '@/helpers/http';

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(Antd);

app.mount('#app');
