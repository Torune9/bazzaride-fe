// middleware/auth.global.client.ts
import { userStore } from '~/store/userStore'

export default defineNuxtRouteMiddleware((to, from) => {
  const store = userStore()

  const publicPaths = [
    '/auth/login',
    '/auth/register',
    '/auth/success',
    '/events',
    '/participants'
  ]

  // Halaman root biarkan lewat
  if (to.path === '/') return

  // Sudah login tapi mau masuk ke halaman login/register/success
  if (store.isLogged && ['/auth/login', '/auth/register', '/auth/success'].includes(to.path)) {
    return navigateTo('/events')
  }

  // Cek apakah route publik
  const isPublic = publicPaths.some(path =>
    to.path === path || to.path.startsWith(path + '/')
  )
  if (isPublic) return

  // Kalau belum login dan mau ke halaman private → redirect
  if (!store.isLogged) {
    return navigateTo('/auth/login', { redirectCode: 302 })
  }
})
