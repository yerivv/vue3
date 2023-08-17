import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from '@/router';
//import GlobalComponents from '@/plugins/global-components';
//import focus from '@/directives/focus';
import GlobalDirectives from '@/plugins/global-directives';
import dayjs from '@/plugins/dayjs';

const app = createApp(App);
//app.use(GlobalComponents);
//app.directive('focus', focus);
app.use(router);
app.use(GlobalDirectives);
app.use(dayjs);
app.use(createPinia());
app.mount('#app');
import 'bootstrap/dist/js/bootstrap.js';

// console.log('MODE', import.meta.env.MODE); //현재 구동되는 모드 (환경변수)
// console.log('BASE_URL', import.meta.env.BASE_URL);
// console.log('PROD', import.meta.env.PROD); //현재 운영이라면 true, false
// console.log('DEV', import.meta.env.DEV); //현재 개발이라면 true, false
// console.log('VITE_APP_API_URL', import.meta.env.VITE_APP_API_URL);
