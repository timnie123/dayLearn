import { createApp } from 'vue'
import {createRouter, createWebHistory} from "vue-router"
import {createPinia} from "pinia";
import Home from './components/Home.vue'
import About from './components/About.vue'
import './style.css'
import App from './App.vue'


const routes = [
    { path: '/', component: Home },
    { path: '/about', name: 'about', component: About },
]

const router = createRouter({
    // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
    history: createWebHistory(),
    routes, // `routes: routes` 的缩写
})

// 动态路由
router.addRoute({
    path: '/info/:id',
    component: () => import('./components/Info.vue')
})

createApp(App).use(router).use(createPinia()).mount('#app')
