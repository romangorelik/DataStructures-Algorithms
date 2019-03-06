// Write a function that sorts an array using Radix Sort. Return a sorted array.
// This uses binary so it uses the size of the encoded digits.

let getDigit = (num, i) => {
  return Math.floor(Math.abs(num) / Math.pow(10, i) % 10)
}

let digitCount = (num) => {
  if (num === 0) return 1
  return Math.floor(Math.log10(Math.abs(num))) + 1
}

let mostDigits = (nums) => {
  let max = 0
  for (let i = 0; i < nums.length; i++) {
    max = Math.max(max, digitCount(nums[i]))
  }
  return max
}

let radixSort = (nums) => {
  let maxDigitCount = mostDigits(nums)
  for (let k = 0; k < maxDigitCount; k++) {
    let digitBuckets = Array.from({length: 10}, () => [])
    for (let i = 0; i < nums.length; i++) {
      let digit = getDigit(nums[i], k)
      digitBuckets[digit].push(nums[i])
    }
    nums = [].concat(...digitBuckets)
  }
  return nums
}

console.log(radixSort([23, 345, 6314, 734, 1, 4367, 0]))

// The amount of times this needs to happen depends on the largest number in the list.
// Time complexity is O(nk). Number of integers * length of those numbers.