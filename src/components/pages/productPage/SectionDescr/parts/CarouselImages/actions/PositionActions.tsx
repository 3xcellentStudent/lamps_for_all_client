function calcElemWidth(element: Element){
  const elementW = element?.getBoundingClientRect().width || 0
  const borderLeftW = parseInt(window.getComputedStyle(element).borderLeftWidth)
  const borderRightW = parseInt(window.getComputedStyle(element).borderRightWidth)
  return elementW - (borderLeftW + borderRightW)
}
export function decrement(element: Element, position: number, lenght: number){
  const width = calcElemWidth(element)
  const condition = position + width <= 0
  return condition ? position + width : width * -(lenght - 1)
}
export function increment(element: Element, position: number, lenght: number){
  const width = calcElemWidth(element)
  const condition = position - width >= (lenght - 1) * -width
  return condition ? position - width : 0
}