import { createApp } from "vue";
import App from './App.vue';
import JHUI from 'jh-ui';
// import JHUI from '../lib/index.js';
// import JHUI from '../lib/index.esm.js'
// import JHUI from '../lib/index.esm.js'
import "../packages/them-chalk/lib/index.css";
createApp(App).use(JHUI).mount('#app');