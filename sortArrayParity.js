// Given an array of non-negative numbers, return an array consisting of all the even
// element followed by all the odd elements. 

let sortArrayByParity = (arr) => {
  let result = arr.filter(x => x % 2 === 0)
  result = result.concat(arr.filter(x => x % 2 !== 0))
  return result
}

// Uses the filter and concat methods to filter and sort the array by parity.