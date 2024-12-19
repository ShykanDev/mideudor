import { defineStore } from 'pinia'

export const useSystemValues = defineStore('useSytemValues', {
  state: () => ({
    isPageHome: false,
    currentPhoto: 0,
    currentDebtor: 'monetario',
    userAuth: false,
    userName: '',
  }),
  getters: {
    gteCurrentPhoto(state): number {
      return state.currentPhoto
    },
    getCurrentDebtor(state): string {
      return state.currentDebtor
    },
    getCurrentPage(state): boolean {
      return state.isPageHome
    },
    getUserStatus(state): boolean {
      return state.userAuth
    },
    getUserName(state): string {
      return state.userName
    },
  },
  actions: {
    setCurrentPhoto(): void {
      let interval
      if (interval) {
        clearInterval(interval)
      }
      interval = 4000
      setInterval(() => {
        if (this.currentPhoto === 4) this.currentPhoto = -1
        this.currentPhoto++
      }, interval)
    },
    setCurrentDebtor(payload: string): void {
      this.currentDebtor = payload
    },
    setCurrentPage(payload: boolean): void {
      this.isPageHome = payload
    },
    setUserStatus(payload: boolean): void {
      this.userAuth = payload
    },
    setUserName(payload: string): void {
      this.userName = payload
    },
  },
})
