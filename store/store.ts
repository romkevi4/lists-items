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
      this.currentLists.map((list) => list.name === currentListName && (list.opened = isOpen))
    },
    setAmountOfLeftItem(currentValueOfItem: number, currentListName: string, currentItemName: string) {
      this.currentLists.map((list) => {
        list.name === currentListName && list.items.map((item) => {
          item.name === currentItemName && (item.amount = currentValueOfItem)
        })
      })
    },
    setAmountOfRightItem(currentListName: string, currentItemName: string) {
      this.currentLists.map((list) => {
        list.name === currentListName && list.items.map((item) => {
          item.name === currentItemName && --item.amount
        })
      })
    },
    setColorOfItem(currentColorOfItem: string, currentListName: string, currentItemName: string) {
      this.currentLists.map((list) => {
        list.name === currentListName && list.items.map((item) => {
          item.name === currentItemName && (item.color = currentColorOfItem)
        })
      })
    },
    toggleListCheckbox(currentValue: boolean, currentListName: string) {
      this.currentLists.map((list) => {
        if (list.name === currentListName) {
          list.active = currentValue
          console.log(list.active)

          list.items.map((item) => {
            item.active = currentValue
            console.log(item.active)
          })
        }
      })
    },
    toggleItemCheckbox(currentValue: boolean, currentListName: string, currentItemName: string) {
      this.currentLists.map((list) => {
        if (list.name === currentListName) {
          list.items.map((item) => {
            item.name === currentItemName && (item.active = currentValue)
          })
        }
      })
    }
  }
})