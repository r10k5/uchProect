import { api } from '@/services'
import type { NavigationGuard } from 'vue-router'

export const authGuard: NavigationGuard = (_to, _from, next) => {
  if (api.isAuthorized()) {
    return next()
  } else {
    return next({ name: 'home' })
  }
}
