// Implement a function which acceps a sorted array, and counts
// the unique values in the array. There can be negative numbers 
// in the array, but it will always be sorted.

let countUniqueValues = (arr) => {
  if (arr.length < 1) return 0

  let counter = 0

  let store = {}

  for (let i = 0; i < arr.length; i++) {
    let num = arr[i]
    if (!store[num]) {
      store[num] = 1
      counter++
    } else {
      continue
    }
  }

  return counter
}

// This is an O(n) time solution, and O(n) space complexity