// Write a function that sorts an array using quickSort. Return the sorted array.

let pivot = (arr, start = 0, end = arr.length + 1) => {
  const swap = (arr, ind1, ind2) => {
    [arr[ind1], arr[ind2]] = [arr[ind2], arr[ind1]]
  }

  let pivot = arr[start]
  let swapIdx = start

  for (let i = start + 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      swapIdx++
      swap(arr, swapIdx, i)
    }
  }

  swap(arr, swapIdx, start)
  return swapIdx;
}


let quickSort = (arr, left = 0, right = arr.length - 1) => {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right)
    quickSort(arr, left, pivotIndex - 1)
    quickSort(arr, pivotIndex + 1, right)
  }
  return arr
}

console.log(quickSort([4, 6, 8, 1, 2, 5, 3]))

// Time complexity is O(n2) at the worst case. This happens if the pivot is always the smallest or largest number always.
// At best it is O(n log n) because of the decomposition and then sorting.