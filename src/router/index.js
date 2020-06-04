import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home/home'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/detail',
    name: 'Detail',
    component: () => import(/* webpackChunkName: "about" */ '../views/detail/detail.vue')
  },
  {
    path: '/blog',
    name: 'Blog',
    component: () => import('../views/blog/blog.vue')
  },
  {
    path: '/self',
    name: 'Self',
    component: () => import('../views/self/self.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/login/login.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/register/register.vue')
  }
]

const router = new VueRouter({
  // mode: 'history',
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
  // scrollBehavior () {
  //   return {
  //     x: 0,
  //     y: 0
  //   }
  // }
})

export default router
