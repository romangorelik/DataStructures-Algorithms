// Write a function which accepts a sorted array and a value and returns the index
// at which the value exists. Otherwise, return -1.

let binarySearch = (arr, target) => {
  let left = 0
  let right = arr.length - 1
  let mid = Math.floor((left + right) / 2)
  while (arr[mid] !== target && left <= right) {
    if (target < arr[mid]) right = mid - 1
    else left = mid + 1
    mid = Math.floor((left + right) / 2)
  }

  return arr[mid] === target ? mid : -1 
}

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 19, 22, 32, 33, 45], 32))