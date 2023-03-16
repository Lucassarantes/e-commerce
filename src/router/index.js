import { createRouter, createWebHistory } from 'vue-router';

import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Products from '../views/Products.vue';

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home
    },
    {
        path: "/about",
        name: "About",
        component: About// route level code-splitting
    },
    {
        path: "/products",
        name: "Products",
        component: Products// route level code-splitting
    }
];

const router = createRouter({
    history: createWebHistory(process.env.Base_URL),
    routes
})
export default router;