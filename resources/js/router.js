import { createWebHistory, createRouter } from "vue-router";
import home from './Components/home.vue';
import login from './Components/auth/login.vue';
import register from './Components/auth/register.vue';
import forget from './Components/auth/forget.vue';


const routes = [
    { path: '/', name: 'Home', component: home, },
    { path: '/login', name: 'Login', component: login, },
    { path: '/register', name: 'Register', component: register, },
    { path: '/forget', name: 'forget', component: forget, },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
