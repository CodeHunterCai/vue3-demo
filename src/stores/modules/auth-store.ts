import { ref } from 'vue'
import { defineStore } from 'pinia'
import { getMenuListApi } from '@/api'

const AuthStore = defineStore('AuthStore', () => {
  const authMenuList = ref([])

  async function generateAuthMenuListAsync() {
    const authMenuListFromServer = await getMenuListApi()
    console.log(authMenuListFromServer)
  }

  return {
    authMenuList,
    generateAuthMenuListAsync
  }
})

export default AuthStore
