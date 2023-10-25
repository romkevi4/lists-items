import { defineStore } from 'pinia'
import { IList } from '../models'

export const useGlobalStore = defineStore('store', {
  state: () => ({
    currentLists: [] as IList[],
    prevColorOfItem: '' as string,
    currentColorsOfItems: [] as string[],
    randomColorsOfItems: [] as string[]
  }),
  actions: {
    setCurrentLists(data: IList[]) {
      this.currentLists = data

      data.forEach((list) => {
        this.currentColorsOfItems = list.colors
      })

      this.randomColorsOfItems = [...this.currentColorsOfItems]

      for (let i = this.randomColorsOfItems.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [this.randomColorsOfItems[i], this.randomColorsOfItems[j]] = [this.randomColorsOfItems[j], this.randomColorsOfItems[i]]
      }
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
        if (list.name === currentListName) {
          list.items.map((item) => {
            if (item.name === currentItemName) {
              this.prevColorOfItem = item.color
              item.color = currentColorOfItem
            }
          })

          for (let i = 0; i < list.colors.length; i++) {
            list.colors[i] === this.prevColorOfItem && (list.colors[i] = currentColorOfItem)
          }
          // this.changeArrayWithColors(list.colors, this.prevColorOfItem, currentColorOfItem)

          for (let j = 0; j < this.randomColorsOfItems.length; j++) {
            list.colors[j] === this.prevColorOfItem && (this.randomColorsOfItems[j] = currentColorOfItem)
          }
          // this.changeArrayWithColors(this.randomColorsOfItems, this.prevColorOfItem, currentColorOfItem)
        }
      })
    },
    // setRandomColorsOfItems(currentColors: string[]) {
    //   this.randomColorsOfItems = [...currentColors]
    //
    //   for (let i = this.randomColorsOfItems.length - 1; i > 0; i--) {
    //     const j = Math.floor(Math.random() * (i + 1));
    //     [this.randomColorsOfItems[i], this.randomColorsOfItems[j]] = [this.randomColorsOfItems[j], this.randomColorsOfItems[i]]
    //   }
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
  },
  // methods: {
  //   changeArrayWithColors(arr: string[], prevValue: string, currentColor: string) {
  //     for (let i = 0; i < arr.length; i++) {
  //       arr[i] === prevValue && (arr[i] = currentColor)
  //     }
  //   },
  // },
})