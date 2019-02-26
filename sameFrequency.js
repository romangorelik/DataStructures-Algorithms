// Write a function where given two positive integers, find out
// if the two numbers have the same frequency of digits.

let sameFrequency = (num, num2) => {
  let storage = {}
  num = num.toString()
  num2 = num2.toString()

  if (num.length !== num2.length) return false

  for (let i = 0; i < num.length; i++) {
    let digit = num[i]
    storage[digit] = storage[digit] ? storage[digit] + 1 : 1
  }

  for (let i = 0; i < num2.length; i++) {
    let digit = num2[i]
    if (storage[digit] && storage[digit] > 0) {
      storage[digit] = storage[digit] - 1
    } else {
      return false
    }
  }

  return true
}

// This works with O(n) solution as it only loops through the number if its the same length and n times.
