// Write an inner recursive function that collects odd numbers from an array
// and returns an array of those odd numbers.

let collectOdds = (arr) => {
  let result = []

  let helper = (array) => {
    if (array.length === 0) return
    if (array[0] % 2 === 1) result.push(array[0])
    helper(array.slice(1))
  }

  helper(arr)
  return result
}

