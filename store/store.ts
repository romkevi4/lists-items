import { defineStore } from 'pinia'
import { IList } from '../models'

export const useGlobalStore = defineStore('store', {
  state: () => ({
    currentLists: [] as IList[],
    isOpenList: false as boolean,
  }),
  actions: {
    setCurrentLists(data: IList[]) {
      this.currentLists = data
    },
    onOpen() {
      this.isOpenList = !this.isOpenList
    }
  }
})