import Vue from 'vue'
import VueRouter from 'vue-router'
import SignInView from '@/views/SignInView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'signin',
    component: SignInView
  },
  {
    path: '/signup',
    name: 'signup',
    component: () => import(/* webpackChunkName: "about" */ '@/views/SignUpView.vue')
  },
  {
    path: '/dashboard',
    name: 'dasboard',
    component: () => import(/* webpackChunkName: "about" */ '@/views/DashboardView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
