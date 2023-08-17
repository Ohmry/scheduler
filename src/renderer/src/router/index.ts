import { createWebHistory, createRouter } from "vue-router"

const routes = [
  {
    path: '/',
    name: 'Main',
    component: () => import('@renderer/components/view/MainView.vue')
  },
  {
    path: '/checklist-view',
    name: 'CheckListView',
    component: () => import('@renderer/components/view/CheckListView.vue')
  },
  {
    path: '/kanbanboard-view',
    name: 'KanbanBoardView',
    component: () => import('@renderer/components/view/KanbanBoardView.vue')
  },
  {
    path: '/ganttchart-view',
    name: 'GanttChartView',
    component: () => import('@renderer/components/view/GanttChartView.vue')
  },
  {
    path: '/setting-view',
    name: 'SettingView',
    component: () => import('@renderer/components/view/SettingView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router