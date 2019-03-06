// Write a function that sorts an array using mergeSort. Return the sorted array.

let merge = (arr1, arr2) => {
  let newArr = []
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr2[j] >= arr1[i]) {
      newArr.push(arr1[i])
      i++
    } else {
      newArr.push(arr2[j])
      j++
    }
  }

  while(i < arr1.length) {
    newArr.push(arr1[i])
    i++
  }

  while(j < arr2.length) {
    newArr.push(arr2[j])
    j++
  }

  return newArr
}

// Time complexity is O(n + m). Usually it is either the same amount or one is +1 in length.

let mergeSort = (arr) => {
  if (arr.length <= 1) return arr
  let mid = Math.floor(arr.length / 2)
  let left = mergeSort(arr.slice(0, mid))
  let right = mergeSort(arr.slice(mid))
  return merge(left, right)
}

console.log(mergeSort([8, 3, 5, 4, 7, 6, 1, 2]))