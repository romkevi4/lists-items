interface IItem {
  name: string,
  amount: number,
  color: string,
  active: boolean,
}

interface IList {
  name: string,
  items: IItem[],
  active: boolean,
  opened: boolean,
  full: boolean | null
}

export type {
  IList,
  IItem,
}
