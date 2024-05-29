export function getRandomInt(min=0, max=100) {
  let number = Math.random()  // a number between 0 and 1
  number = (number*(max-min))+min
  return Math.floor(number)
}