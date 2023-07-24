import 'bootstrap/dist/css/bootstrap.min.css';
import { createApp } from 'vue';
import App from './App.vue';

createApp(App).provide('app-message', 'app Message 입니다').mount('#app');
import 'bootstrap/dist/js/bootstrap.js';
