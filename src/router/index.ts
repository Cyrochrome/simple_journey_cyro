import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import ServicesView from '@/views/ServicesView.vue'
import AboutView from '@/views/AboutView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
    meta: {
      layout: 'DefaultLayout',
      showInNav: true,
    },
  },
  {
    path: '/services',
    name: 'Services',
    component: ServicesView,
    meta: {
      layout: 'DefaultLayout',
      showInNav: true,
    },
  },
  {
    path: '/about',
    name: 'About',
    component: AboutView,
    meta: {
      layout: 'DefaultLayout',
      showInNav: true,
    },
  },
  {
    path: '/#contact',
    name: 'Contact Us',
    component: HomeView,
    meta: {
      layout: 'DefaultLayout',
      showInNav: true,
    },
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    }
    return { top: 0 }
  },
})

export default router
