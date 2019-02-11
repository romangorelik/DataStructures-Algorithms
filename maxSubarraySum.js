// Write a function which accepts an array of integers and a 
// number called n. The function should calculate the maximum 
// sum of n consecutive elements in the array.

let maxSubarraySum = (arr, n) => {
  if (arr.length < n) return null

  let max = 0
  let current = 0
  
  for (let i = 0; i < n; i++) {
    max += arr[i]
  }

  current = max

  for (let i = n; i < arr.length; i++) {
    current = current - arr[i - n] + arr[i]
    max = Math.max(max, current)
  }

  return max
}

console.log(maxSubarraySum([4,2,1,6,2], 4))

// This is O(n) with a sliding window approach.