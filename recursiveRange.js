// Write a function which accepts a number and adds up all the
// numbers from 0 to the number pased to the function.

let recursiveRange = (num) => {
  if (num === 0) return 0
  return num + recursiveRange(num - 1)
}

