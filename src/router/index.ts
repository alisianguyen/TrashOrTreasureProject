import { createRouter, createWebHistory } from '../../node_modules/vue-router'
// import HomeView from '../views/HomeView.vue'
import Register from '../RegisterPage.vue'
import Home from '../HomePage.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
  ]
})

export default router
