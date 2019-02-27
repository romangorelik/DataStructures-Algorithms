// Write a recursive function which accepts a string and returns a new
// string in reverse.

let reverse = (str) => {
  let reverseArr = []
  str = str.split('')

  let helper = (arr) => {
    let end = arr.length - 1
    if (arr.length === 0) return 
    reverseArr.push(arr[end])
    arr.pop()
    helper(arr)
  }

  helper(str)
  reverseArr = reverseArr.join('')
  return reverseArr
}
