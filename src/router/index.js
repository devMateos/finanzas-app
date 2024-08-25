import { createRouter, createWebHistory } from 'vue-router'
import { getAuth } from 'firebase/auth'

const routes = [
  {
    path: '/',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/login',
    component: () => import('../views/auth/Login.vue')
  },
  {
    path: '/register',
    component: () => import('../views/auth/Register.vue')
  },
  {
    path: '/dashboard',
    component: () => import('../views/dashboard/Dashboard.vue'),
    meta: { requiresAuth: true }
  }
  /* {
    path: '/user/:userId',
    component: () => import('../views/dashboard/UserProfile.vue'),
    meta: { requiresAuth: true },
    props: true // Permite pasar el parámetro como prop
  } */
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  const auth = getAuth()
  const user = auth.currentUser
  if (to.matched.some((record) => record.meta.requiresAuth) && !user) {
    next('/login')
  } else {
    next()
  }
})

export default router
