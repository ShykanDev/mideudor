import { defineStore } from 'pinia'

export const useSystemValues = defineStore('useSytemValues', {
  state: () => ({
    isPageHome: false,
    currentPhoto: 0,
    currentDebtor: 'monetario',
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
  },
})
