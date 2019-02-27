// Write a recursive function, where given an array of strings,
// capitalize the first letter of each string in the array.

let capitalizeFirst = (arr) => {
  let result = []

  let helper = (arr) => {
    if (arr.length === 0) return
    result.push(arr[0].charAt(0).toUpperCase() + arr[0].slice(1))
    helper(arr.slice(1))
  }

  helper(arr)
  return result
}

console.log(capitalizeFirst(['hello', 'good', 'bye']))
