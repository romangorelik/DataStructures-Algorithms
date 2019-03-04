// Write a function that sorts an array using selection sort, and returns a sorted array.

let selectionSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let lowest = i
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[lowest] > arr[j]) {
        lowest = j
      }
    }
    if (i !== lowest) {
      let temp = arr[i]
      arr[i] = arr[lowest]
      arr[lowest] = temp
    }
  }

  return arr
}

