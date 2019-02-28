// Given an array of integers sorted, return an array of the squares of each number, also sorted.
// Account for negative integers becoming positive.

let sortedSquares = function(A) {
  let arr = A.map(x => Math.pow(x, 2))
  arr = arr.sort((a, b) => a - b)
  return arr
};

// This solves it in O(log n) as the sort function is a log-n run time.