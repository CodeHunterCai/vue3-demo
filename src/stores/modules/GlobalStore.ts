import { defineStore } from 'pinia'
import { useStorage } from '@vueuse/core'

const defaultUserInfo: any = {
  username: ''
}

export const GlobalStore = defineStore('GlobalStore', () => {
  const language = useStorage('language', '')
  const token = useStorage('token', '')
  const userInfo = useStorage('userInfo', { ...defaultUserInfo })

  function setLanguage(newLanguage: string) {
    language.value = newLanguage
  }
  function setToken(newToken: string) {
    token.value = newToken
  }
  function setUserInfo(newUserInfo: object) {
    userInfo.value = {
      ...userInfo.value,
      ...newUserInfo
    }
  }
  function deleteUser() {
    token.value = ''
    userInfo.value = { ...defaultUserInfo }
  }

  return {
    language,
    token,
    userInfo,
    setLanguage,
    setToken,
    setUserInfo,
    deleteUser
  }
})
