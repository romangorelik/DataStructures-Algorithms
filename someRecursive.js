// Write a function which accepts an array and a callback. The function
// returns true if a single value in the array returns true when passed to
// the callback. Otherwise it returns false.

const isOdd = val => val % 2 !== 0;

let someRecursive = (arr, cb) => {
  if (arr.length === 0) return false
  if (cb(arr[0])) return true
  return someRecursive(arr.slice(1), cb)
}

console.log(someRecursive([2, 4, 6, 2], isOdd))