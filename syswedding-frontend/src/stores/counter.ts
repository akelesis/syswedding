import { defineStore } from 'pinia'

interface State {
  guestToken: string;
}

export const useStore = defineStore('storeId', {
  state: (): State => {
    return {
      guestToken: ''
    }
  },
  actions: {
    setGuestToken(newToken: string) {
      this.guestToken = newToken
    }
  }
})