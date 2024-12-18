import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import path from 'path'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/tipos',
      name: 'types',
      component: () => import('../views/TypesView.vue'),
    },
    {
      path: '/ejemplos',
      name: 'examples',
      component: () => import('../views/ExamplesView.vue'),
    },
    {
      path: '/contacto',
      name: 'contact',
      component: () => import('../views/ContactView.vue'),
    },
    {
      path: '/comentarios',
      name: 'comments',
      component: () => import('../views/ComentsView.vue'),
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/SignInView.vue'),
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/RegisterView.vue'),
    },
    {
      path: '/reset-password',
      name: 'reset',
      component: () => import('../views/ResetPassword.vue'),
    },
    {
      path: '/comment',
      name: 'comment',
      component: () => import('../views/CommentView.vue'),
    },
    {
      path: '/privacy',
      name: 'privacy',
      component: () => import('../views/PrivacyView.vue'),
    },
    {
      path: '/terms',
      name: 'terms',
      component: () => import('../views/TermsView.vue'),
    },
    {
      // to home
      path: '/:pathMatch(.*)*',
      redirect: { name: 'home' },
    },
  ],
  scrollBehavior() {
    return { top: 0 }
  },
})

export default router
