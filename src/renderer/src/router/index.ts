import { createWebHistory, createRouter } from "vue-router"

const routes = [
  {
    path: '/',
    name: 'Main',
    component: () => import('@renderer/components/view/MainView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router