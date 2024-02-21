import { defineStore } from 'pinia'

const userInfo = {}

export const GlobalStore = defineStore({
  id: 'GlobalStore',
  state: () => ({
    language: '',
    token: '',
    userInfo: { ...userInfo }
  }),
  getters: {},
  actions: {
    setLanguage(language: string) {
      this.language = language
    },
    setToken(token: string) {
      this.token = token
    },
    setUserInfo(userInfo: object) {
      this.userInfo = {
        ...this.userInfo,
        ...userInfo
      }
    },
    deleteUser() {
      this.token = ''
      this.userInfo = { ...userInfo }
    }
  },
  persist: {
    key: 'system-info'
  }
})
