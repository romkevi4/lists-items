import { defineStore } from 'pinia'
import { IList } from '../models'

export const useGlobalStore = defineStore('store', {
  state: () => ({
    currentLists: [] as IList[],
    currentColorsOfItems: [] as string[][],
  }),
  actions: {
    setCurrentLists(data: IList[]) {
      this.currentLists = data

      function getColors() {
        const colors: string[][] = [[]]

        data.forEach((list, index) => {
          list.items.forEach((item) => {
            for (let i = 0; i < item.amount; i++) {
              colors[index].push(item.color)
            }
          })
        })

        return colors
      }

      this.currentColorsOfItems = getColors()

      console.log(getColors())
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
    setAmountOfRightItemSorted(currentListName: string, currentItemName: string) {
      this.currentLists.map((list) => {
        list.name === currentListName && list.items.map((item) => {
          item.name === currentItemName && item.amount--
        })
      })
    },
    setAmountOfRightItemMixed(currentColor: string, currentListName: string,) {
      this.currentLists.map((list) => {
        list.name === currentListName && list.items.map((item) => {
          item.color === currentColor && item.amount--
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
    // setRandomColorsOfItems() {
    //
    // },
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