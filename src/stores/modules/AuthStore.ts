import { ref } from 'vue'
import { defineStore } from 'pinia'
import { getMenuListApi } from '@/api'

export const AuthStore = defineStore('AuthStore', () => {
  const authMenuList = ref([])

  async function generateAuthMenuList() {
    const authMenuListFromServer = await getMenuListApi()
    console.log(authMenuListFromServer)
  }

  return {
    authMenuList,
    generateAuthMenuList
  }
})
