import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import EditorView from '@/views/EditorView.vue'
import AboutView from '@/views/AboutView.vue'
import ResultsView from '@/views/ResultsView.vue'
import { authGuard } from './auth.guard'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/admin/create-product',
      name: 'admin-create-product',
      component: EditorView,
      beforeEnter: [authGuard],
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/results',
      name: 'results',
      component: ResultsView
    },
    {
      path: '/admin',
      name: 'admin-panel',
      component: () => import('@/views/AdminEnterView.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/'
    }
  ]
})

export default router
