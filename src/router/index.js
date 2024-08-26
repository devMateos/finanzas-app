import { createRouter, createWebHistory } from 'vue-router'
import { getAuth } from 'firebase/auth'

const routes = [
  {
    path: '/',
    component: () => import('../views/auth/Login.vue')
  },
  {
    path: '/dashboard',
    component: () => import('../views/dashboard/Dashboard.vue'),
    meta: { requiresAuth: true }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  const auth = getAuth()
  const user = auth.currentUser
  if (to.matched.some((record) => record.meta.requiresAuth) && !user) {
    next('/')
  } else {
    next()
  }
})

export default router
