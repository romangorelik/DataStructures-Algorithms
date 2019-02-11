// Write a function which accepts two arrays. The function
// should return true if every value in the array has
// it's corresponding value squared in the second array.

let same = (arr1, arr2) => {
  let storage = {}
  let counter = 0

  for (let i = 0; i < arr1.length; i++) {
    let key = Math.pow(arr1[i], 2)
    storage[key] = key
    counter++
  }

  for (let i = 0; i < arr2.length; i++) {
    if (storage[arr2[i]]) {
      counter--
    } else {
      return false
    }
  }

  return counter === 0
}

console.log(same([1, 2, 3], [1, 4, 9, 11]))
console.log(same([1, 2, 3], [1, 9]))
console.log(same([2, 5, 3], [25, 4, 9]))

// This solution is O(n) as opposed to double looping which would be O(n2)