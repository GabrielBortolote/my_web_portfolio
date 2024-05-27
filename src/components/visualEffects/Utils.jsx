export function gentRandomInt(min=0, max=100) {
  let number = Math.random()
  number *= max
  return Math.floor(number)
}