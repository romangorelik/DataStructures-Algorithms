// Write a function that sorts an array of integers using insertion sort.
// Return a sorted array.

let insertionSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    let currentVal = arr[i]
    for (var j = i- 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j + 1] = arr[j]
    }
    arr[j + 1] = currentVal
  }

  return arr
}

console.log(insertionSort([2, 1, 9, 76, 4, 7, 11, 10]))

// Time complexity is O(n2) as we make n squared number of comparisons.
// If data is almost sorted then it could be close to O(n)