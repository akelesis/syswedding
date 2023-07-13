import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import GuestsArea from '../views/GuestsArea.vue'
import FirstAccess from '../views/FirstAccess.vue'
import SignUpConfirm from '../views/SignUpConfirm.vue'
import SignUpError from '../views/SignUpError.vue'
import PasswordRecovery from '../views/PasswordRecovery.vue'
import PasswordReset from '../views/PasswordReset.vue'
import DeclineAttendance from '../views/DeclineAttendance.vue'
import ConfirmAttendance from '@/views/ConfirmAttendance.vue'
import ScanGuest from '@/views/ScanGuest.vue'

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
    {
      path: '/sign-up-confirm',
      name: 'signUpConfirm',
      component: SignUpConfirm,
    },
    {
      path: '/sign-up-error',
      name: 'signUpError',
      component: SignUpError,
    },
    {
      path: '/password-recovery',
      name: 'passwordRecovery',
      component: PasswordRecovery,
    },
    {
      path: '/password-reset',
      name: 'passwordReset',
      component: PasswordReset,
    },
    {
      path: '/decline',
      name: 'declineAttendance',
      component: DeclineAttendance,
    },
    {
      path: '/confirm',
      name: 'confirmAttendance',
      component: ConfirmAttendance,
    },
    {
      path: '/scan-guest',
      name: 'scanGuest',
      component: ScanGuest,
    },
  ]
})

export default router
