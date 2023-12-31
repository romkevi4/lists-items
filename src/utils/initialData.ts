import { IList } from '../../models'
import {
  AMOUNT_OF_LISTS,
  COLOR_HEX_LENGTH,
  MIN_ITEM,
  MAX_ITEM,
  MIN_AMOUNT_OF_ITEM,
  MAX_AMOUNT_OF_ITEM
} from '@/utils/constants'

function setRandomElement(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function setRandomColorOfItem(): string {
  const symbols = '0123456789ABCDEF'
  let color = '#'

  for (let i = 0; i < COLOR_HEX_LENGTH; i++) {
    const randomIndex = Math.floor(Math.random() * symbols.length)
    color += symbols[randomIndex]
  }

  return color
}

export function setDataOfLists(): IList[] {
  const lists: IList[] = []

  for (let i = 1; i <= AMOUNT_OF_LISTS; i++) {
    const dataOfLists = {
      name: `List ${i}`,
      items: [],
      active: false,
      opened: false,
      colors: [],
    }

    lists.push(dataOfLists)
  }

  lists.forEach((list: IList) => {
    const randomItems: number = setRandomElement(MIN_ITEM, MAX_ITEM)

    for (let j = 1; j <= randomItems; j++) {
      const randomColor = setRandomColorOfItem()
      const randomAmountOfItem = setRandomElement(MIN_AMOUNT_OF_ITEM, MAX_AMOUNT_OF_ITEM)

      const dataOfItem = {
        name: `Item ${j}`,
        amount: randomAmountOfItem,
        color: randomColor,
        active: false
      }

      for (let k = 1; k <= randomAmountOfItem; k++) {
        list.colors.push(randomColor)
      }

      list.items.push(dataOfItem)
    }
  })

  return lists
}
