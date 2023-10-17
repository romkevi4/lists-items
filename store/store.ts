import { defineStore } from 'pinia'
import { IList } from '../models'

export const useGlobalStore = defineStore('store', {
  state: () => ({
    currentLists: [] as IList[],
  }),
  actions: {
    setCurrentLists(data: IList[]) {
      this.currentLists = data
    }
  }
})