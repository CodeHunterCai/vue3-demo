import { defineStore } from 'pinia'
import { useStorage, useUrlSearchParams } from '@vueuse/core'
import Cookies from 'universal-cookie'
import { getBrowserLang } from '@/utils/util'
import { getUserInfoApi, logoutApi } from '@/api'

const cookies = new Cookies(null, { path: '/' })

const defaultUserInfo: any = {
  id: undefined,
  username: '',
  email: ''
}

const GlobalStore = defineStore('GlobalStore', () => {
  const ssoLoginUrl = useStorage('ssoLoginUrl', '')
  const language = useStorage('language', getBrowserLang())
  const userInfo = useStorage('userInfo', { ...defaultUserInfo })

  function setSsoLoginUrl(newSsoLoginUrl: string) {
    if (!newSsoLoginUrl) {
      return
    }
    ssoLoginUrl.value = newSsoLoginUrl
  }
  function setLanguage(newLanguage: string) {
    language.value = newLanguage
  }
  function setUserInfo(newUserInfo: object) {
    userInfo.value = {
      ...userInfo.value,
      ...newUserInfo
    }
  }
  function getToken() {
    return cookies.get('SSO_TOKEN')
  }
  async function getUserInfoFromServerAsync() {
    const token = getToken()
    if (token && userInfo.value?.id) {
      return
    }
    const ticket = useUrlSearchParams('history')?.ticket || ''
    const result = await getUserInfoApi({ ticket })
    setUserInfo({
      id: result.id,
      username: result.name,
      email: result.email
    })
  }
  function deleteUser() {
    userInfo.value = { ...defaultUserInfo }
  }
  async function logoutAsync() {
    await logoutApi()
  }
  function jumpToSsoLogin() {
    location.href = ssoLoginUrl.value
  }

  return {
    ssoLoginUrl,
    language,
    userInfo,
    setSsoLoginUrl,
    setLanguage,
    setUserInfo,
    getToken,
    logoutAsync,
    deleteUser,
    jumpToSsoLogin,
    getUserInfoFromServerAsync
  }
})

export default GlobalStore
