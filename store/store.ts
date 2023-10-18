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
    setOpenOfList(isOpen: boolean, currentListName: string) {
      this.currentLists.map((list) => list.name === currentListName && (list.active = isOpen))
    },
  }
})