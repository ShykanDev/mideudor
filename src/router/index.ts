import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { Notyf } from 'notyf'
import 'notyf/notyf.min.css' // for React, Vue and Svelte
import { useSystemValues } from '@/stores/systemValues'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: { authRequired: false },
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
      meta: { authRequired: false },
    },
    {
      path: '/tipos',
      name: 'types',
      component: () => import('../views/TypesView.vue'),
      meta: { authRequired: false },
    },
    {
      path: '/ejemplos',
      name: 'examples',
      component: () => import('../views/ExamplesView.vue'),
      meta: { authRequired: false },
    },
    {
      path: '/contacto',
      name: 'contact',
      component: () => import('../views/ContactView.vue'),
      meta: { authRequired: false },
    },

    {
      path: '/login',
      name: 'login',
      component: () => import('../views/SignInView.vue'),
      meta: { authRequired: false },
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/RegisterView.vue'),
      meta: { authRequired: false },
    },
    {
      path: '/reset-password',
      name: 'reset',
      component: () => import('../views/ResetPassword.vue'),
      meta: { authRequired: false },
    },
    {
      path: '/comment',
      name: 'comment',
      component: () => import('../views/CommentView.vue'),
      meta: { authRequired: true },
    },
    {
      path: '/privacy',
      name: 'privacy',
      component: () => import('../views/PrivacyView.vue'),
      meta: { authRequired: false },
    },
    {
      path: '/terms',
      name: 'terms',
      component: () => import('../views/TermsView.vue'),
      meta: { authRequired: false },
    },
    {
      // to home
      path: '/:pathMatch(.*)*',
      redirect: { name: 'home' },
      meta: { authRequired: false },
    },
  ],
  scrollBehavior() {
    return { top: 0 }
  },
})
const notyf = new Notyf()

router.beforeEach((to, from, next) => {
  const userAuth = useSystemValues().getUserStatus
  if (to.meta.authRequired && !userAuth) {
    notyf.error({
      message: `Inicie sesion para continuar`,
      dismissible: true,
      duration: 10000,
      ripple: true,
      position: {
        x: 'right',
        y: 'top',
      },
    })
    return next({ name: 'login' })
  }
  next()
})

export default router
