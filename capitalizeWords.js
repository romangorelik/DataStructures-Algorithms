// Write a recursive function where given an array of words, returns
// a new array contained each word capitalized.

let capitalizeWords = (arr) => {
  let result = []
  if (arr[0] === undefined) return
  result.push(arr[0].toUpperCase())
  return result = result.concat(capitalizeWords(arr.slice(1)))
}