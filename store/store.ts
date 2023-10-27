import { defineStore } from 'pinia'
import { IList } from '../models'

export const useGlobalStore = defineStore('store', {
  state: () => ({
    currentLists: [] as IList[],
    prevColorOfItem: '' as string,
    randomColors: [] as string[],
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
        if (list.name === currentListName) {
          list.items.map((item) => {
            if (item.name === currentItemName) {
              item.amount = currentValueOfItem
              this._updateArrayValueToCount(list.colors, currentValueOfItem, item.color)
              this._updateArrayValueToCount(this.randomColors, currentValueOfItem, item.color)
            }
          })
        }
      })
    },
    setAmountOfRightItem(currentColor: string, currentListName: string,) {
      this.currentLists.map((list) => {
        list.name === currentListName && list.items.map((item) => {
          if (item.color === currentColor) {
            item.amount--
            this.removeColorInArrayWithColors(list.colors, currentColor)
          }
        })
      })
    },
    controlColorOfItem(currentColorOfItem: string, currentListName: string, currentItemName: string) {
      this.currentLists.map((list) => {
        if (list.name === currentListName) {
          list.items.map((item) => {
            if (item.name === currentItemName) {
              this.prevColorOfItem = item.color
              item.color = currentColorOfItem
              this._changeArrayWithColors(list.colors, this.prevColorOfItem, currentColorOfItem)
              this._changeArrayWithColors(this.randomColors, this.prevColorOfItem, currentColorOfItem)
              this.prevColorOfItem = ''
            }
          })
        }
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
    removeColorInArrayWithColors(arr: string[], currentColor: string) {
      const index = arr.indexOf(currentColor)
      index !== -1 && arr.splice(index, 1)
    },
    mixColorsOfItems(currentColors: string[]) {
      this.randomColors = [...currentColors]

      for (let i = this.randomColors.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [this.randomColors[i], this.randomColors[j]] = [this.randomColors[j], this.randomColors[i]]
      }
    },
    _changeArrayWithColors(arr: string[], prevValue: string, currentColor: string) {
      for (let i = 0; i < arr.length; i++) {
        arr[i] === prevValue && (arr[i] = currentColor)
      }
    },
    _updateArrayValueToCount(arr: string[], value: number, searchString: string) {
      let count: number = arr.filter((color): boolean => color === searchString).length

      if (value < count) {
        while (arr.includes(searchString) && count > value) {
          const index = arr.indexOf(searchString)
          arr.splice(index, 1)
          count--
        }
      } else if (value > count) {
        while (count < value) {
          arr.push(searchString)
          count++
        }
      }

      this.mixColorsOfItems(arr)
    },
  },
})