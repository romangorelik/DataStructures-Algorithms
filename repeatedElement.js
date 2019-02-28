// Write a function where given an array, there is exactly one element that is repeated. Return that element.

let repeatedNTimes = (arr) => {
  let storage = new Set()

  for (let i = 0; i < arr.length; i++) {
    if (storage.has(arr[i])) return arr[i]
    storage.add(arr[i])
  }
}

// Solves in O(n) and uses a set to identify unique values.