import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {
  const token = ref('')

  const setToken = (value: string) => {
    token.value = value
  }

  return {
    token,
    setToken,
  }
}, {
  persist: {
    storage: localStorage,
  },
})
