import { IList } from '../../models'
import { AMOUNT_OF_LISTS, COLOR_HEX_LENGTH } from '@/utils/constants'

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
  const dataOfLists

  return dataOfLists
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