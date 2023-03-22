import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import "./assets/tailwind.css";
import { createPinia } from "pinia";

let app;
let pinia;

pinia = createPinia();
app = createApp(App);

app.use(pinia);
app.use(router);
app.mount('#app');

