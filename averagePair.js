// Write a function where given a sroted array of integers and a target
// average, dtermine if there is a pair of values in the array where the
// average of the pair equals the target average

let averagePair = (arr, target) => {
  if (arr.length < 1) return false
  let start = 0
  let end = arr.length - 1

  while(start < end) {
    let avg = (arr[start] + arr[end]) / 2

    if (avg === target) {
      return true
    } else if (avg < target) {
      start++
    } else {
      end--
    }

  }

  return false
}

// This solves the problem using two pointers and a O(n) solution.


