import { IList } from '../../models'
import { AMOUNT_OF_LISTS, COLOR_HEX_LENGTH, MIN_ITEM, MAX_ITEM } from '@/utils/constants'

export function setNumberOfItems(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function setRandomColorOfItem(): string {
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
      active: false
    }

    lists.push(dataOfLists)
  }

  lists.forEach((list: IList) => {
    const randomItemsAmount: number = setNumberOfItems(MIN_ITEM, MAX_ITEM)

    for (let y = 1; y <= randomItemsAmount; y++) {
      const randomColor = setRandomColorOfItem()

      const dataOfItem = {
        name: `Item ${y}`,
        amount: 10,
        color: randomColor,
        active: false
      }

      list.items.push(dataOfItem);
    }
  })

  return lists
}

export const Lists: IList[] = [
  {
    name: 'List 1',
    items: [
      {
        name: 'Item 1',
        amount: 0,
        color: '',
        active: false
      }
    ],
    active: false

  }
]