export function setNumberOfItems(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function setRandomColorOfItem(): string {
  const symbols = '0123456789ABCDEF'
  let color = '#'

  for (let i = 0; i < 6; i++) {
    const randomIndex = Math.floor(Math.random() * symbols.length)
    color += symbols[randomIndex]
  }

  return color
}