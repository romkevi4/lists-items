import { defineStore } from 'pinia'
import { IList } from '../models'

export const useGlobalStore = defineStore('store', {
  state: () => ({
    currentLists: [] as IList[],
    prevColorOfItem: '' as string,
    // currentColorsOfItems: [] as string[],
    // randomColorsOfItems: [] as string[]
  }),
  actions: {
    setCurrentLists(data: IList[]) {
      this.currentLists = data

      // data.forEach((list) => this.currentColorsOfItems = list.colors)
      //
      // this.randomColorsOfItems = [...this.currentColorsOfItems]
    },
    // mixColors() {
    //   for (let i = this.randomColorsOfItems.length - 1; i > 0; i--) {
    //     const j = Math.floor(Math.random() * (i + 1));
    //     [this.randomColorsOfItems[i], this.randomColorsOfItems[j]] = [this.randomColorsOfItems[j], this.randomColorsOfItems[i]]
    //   }
    // },
    setOpenOfList(isOpen: boolean, currentListName: string) {
      this.currentLists.map((list) => list.name === currentListName && (list.opened = isOpen))
    },
    setAmountOfLeftItem(currentValueOfItem: number, currentListName: string, currentItemName: string) {
      this.currentLists.map((list) => {
        if (list.name === currentListName) {
          list.items.map((item) => {
            item.name === currentItemName && (item.amount = currentValueOfItem)

            this._updateArrayValueToCount(list.colors, currentValueOfItem, item.color)
          })
        }
      })
    },
    setAmountOfRightItemSorted(currentColor: string, currentListName: string, currentItemName: string) {
      this.currentLists.map((list) => {
        if (list.name === currentListName) {
          list.items.map((item) => {
            item.name === currentItemName && item.amount--
          })

          const index = list.colors.indexOf(currentColor)
          index !== -1 && list.colors.splice(index, 1)
        }
      })
    },
    setAmountOfRightItemMixed(currentColor: string, currentListName: string,) {
      this.currentLists.map((list) => {
        list.name === currentListName && list.items.map((item) => {
          item.color === currentColor && item.amount--
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
            }
          })

          this._changeArrayWithColors(list.colors, this.prevColorOfItem, currentColorOfItem)
          // this._changeArrayWithColors(this.randomColorsOfItems, this.prevColorOfItem, currentColorOfItem)
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
    _changeArrayWithColors(arr: string[], prevValue: string, currentColor: string) {
      for (let i = 0; i < arr.length; i++) {
        arr[i] === prevValue && (arr[i] = currentColor)
      }
    },
    _updateArrayValueToCount(arr: string[], value: number, searchString: string) {
      console.log(arr)
      let count: number = arr.filter((item): boolean => item === searchString).length;

      if (value < count) {
        while (arr.includes(searchString) && count > value) {
          const index = arr.indexOf(searchString);
          arr.splice(index, 1);
          count--;
        }
      } else if (value > count) {
        while (count < value) {
          arr.push(searchString);
          count++;
        }
      }

      console.log(arr)
    }
  },
})