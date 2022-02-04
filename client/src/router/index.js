import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import UserDetails from '../views/UserDetail'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/details/:id',
    name: 'details',
    component: UserDetails,
    props: true,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
