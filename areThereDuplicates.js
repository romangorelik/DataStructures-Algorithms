//Implement a function which accepts a variable number of arguments, and
// checks whether there are any duplicates among the arguments passed in.

let areThereDuplicates = (...chars) => {
  let store = {}

  for (let i = 0; i < chars.length; i++) {
    if (store[chars[i]]) {
      return true
    } else {
      store[chars[i]] = 1
    }
  }

  return false
}

// This solves the problem in O(n) as we don't know how many arguments will be passed so we must go through them all.


