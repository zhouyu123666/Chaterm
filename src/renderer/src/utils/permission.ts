export const CtmTokenKey: string = 'Ctm-Token' //BearerToken
import { userInfoStore } from '@/store/index'
import { pinia } from '@/main'

// 手动创建 Pinia 实例
const baseSso = import.meta.env.RENDERER_SSO
const currentUrl = location.href
export function getLoginUrl() {
  return baseSso + currentUrl
}
export function removeToken() {
  localStorage.removeItem('ctm-token')
  location.href = '/login'
}
export const setUserInfo = (info) => {
  const userStore = userInfoStore(pinia)
  userStore.updateInfo(info)
}
export const getUserInfo = () => {
  const userStore = userInfoStore(pinia)
  return userStore.userInfo
}
