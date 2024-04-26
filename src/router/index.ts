import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import EditorView from '@/views/EditorView.vue'
import AboutView from '@/views/AboutView.vue'
import ResultsView from '@/views/ResultsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/edit',
      name: 'edit',
      component: EditorView
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
  ]
})

export default router
