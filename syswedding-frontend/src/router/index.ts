import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import GuestsArea from '../views/GuestsArea.vue'
import FirstAccess from '../views/FirstAccess.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/guest-confirm',
      name: 'guestArea',
      component: GuestsArea
    },
    {
      path: '/first-access',
      name: 'firstAccess',
      component: FirstAccess,
    },
  ]
})

export default router
