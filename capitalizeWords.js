// Write a recursive function where given an array of words, returns
// a new array contained each word capitalized.

let capitalizeWords = (arr) => {
  let result = []
  if (arr.length === 1) return [arr[0].toUpperCase()]
  result.push(arr[0].toUpperCase())
  return result = result.concat(capitalizeWords(arr.slice(1)))
}