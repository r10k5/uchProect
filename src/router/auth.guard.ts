import { api } from '@/services'
import type {
  NavigationGuardNext,
  RouteLocationNormalizedGeneric,
  RouteLocationNormalizedLoadedGeneric
} from 'vue-router'

export const authGuard = (
  to: RouteLocationNormalizedGeneric,
  from: RouteLocationNormalizedLoadedGeneric,
  next: NavigationGuardNext
) => {
  if (api.isAuthorized()) {
    return to
  } else {
    return next({ name: 'home' })
  }
}
