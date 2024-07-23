import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/users',
      component: () => import('../pages/Users.vue')
    },
    {
      path: '/courses',
      component: () => import('../pages/Courses.vue')
    }
  ]
})

export default router
