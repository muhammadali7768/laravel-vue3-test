require('./bootstrap');

import { createApp } from 'vue'
import App from './components/App'

const app = createApp({})

// app.component('app', App)




//Vue Router registeration
import { createRouter, createWebHistory } from 'vue-router'
import { routes } from "./router/router";
// app.use(VueRouter);
const router = new createRouter({
    history: createWebHistory(),
    routes 
});

// app.mount('#app')

createApp(App)
//   .use(VueAxios, axios)
  .use(router)
  .mount('#app')