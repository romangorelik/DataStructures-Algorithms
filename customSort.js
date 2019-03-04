// Write a customSort function that takes in an array of integers, and sort them first ascending by frequency
// and then ascending by value.

// Ex. [1,2,2,3,4,5,5,0,0,0] => [1, 3, 4, 2, 2, 5, 5, 0, 0, 0]

let customSort = (arr) => {
  let storage = {}
  let sorted = []

  for (let i = 0; i < arr.length; i++) {
    let num = arr[i]
    storage[num] = storage[num] ? storage[num] + 1 : 1
  }

  for (let key in storage) {
    sorted.push([key, storage[key]])
  }

  sorted = sorted.sort((a,b) => a[1] - b[1])
  sorted = sorted.sort((a,b) => {
    if (a[1] === b[1]) {
      return a[0] - b[0]
    }
  })

  let results = []

  for (let i = 0; i < sorted.length; i++) {
    let inner = sorted[i]
    for (let j = 0; j < inner[1]; j++) {
      results.push(inner[0])
    }
  }

  return results
}

console.log(customSort([1,2,2,3,4,5,5,10,0,0,0,0,5]))