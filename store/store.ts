import { defineStore } from 'pinia'
import { IList } from '../models'

export const useGlobalStore = defineStore('store', {
  state: () => ({
    currentLists: [] as IList[],
    randomColorsOfItems: [] as string[]
  }),
  actions: {
    setCurrentLists(data: IList[]) {
      this.currentLists = data
    },
    setRandomColors() {
      const colors: string[] = []

      this.currentLists.forEach((list) => {
        list.items.forEach((item) => {
          for (let i = 0; i <= item.amount; i++) {
            colors.push(item.color)
          }
        })
      })

      for (let i = colors.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [colors[i], colors[j]] = [colors[j], colors[i]];
      }

      this.randomColorsOfItems = [...colors]
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
          item.name === currentItemName && item.amount--
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
    toggleListCheckbox(currentListName: string) {
      this.currentLists.map((list) => {
        if (list.name === currentListName) {
          list.active = !list.active

          list.items.map((item) => {
            item.active = !item.active
          })
        }
      })
    },
    toggleItemCheckbox(currentListName: string, currentItemName: string) {
      this.currentLists.map((list) => {
        if (list.name === currentListName) {
          list.items.map((item) => {
            item.name === currentItemName && (item.active = !item.active)
          })
        }
      })
    },
    toggleActiveList(currentListName: string) {
      this.currentLists.map((list) => {
        if (list.name === currentListName) {
          list.active = !list.active
        }
      })
    },
    activateAllItems(currentListName: string) {
      this.currentLists.map((list) => {
        if (list.name === currentListName) {
          list.items.map((item) => {
            !item.active && (item.active = true)
          })
        }
      })
    },
  }
})