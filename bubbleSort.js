// Write a function that implements bubble sort, and returns a sorted array.

let bubbleSort = (arr) => {
  let noSwaps;

  for (let i = arr.length; i > 0; i--) {
    noSwaps = true
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = temp
        noSwaps = false
      }
    }
    if (noSwaps) break
  }
  return arr
}

// Added a check to see if no swaps where made on the previous run, to short circuit the sorting.