// Write a function which accepts a string and returns the length
// of the longest substring with all distinct characters.

let findLongestSubstring = (str) => {
  let maxLength = 0
  let store = {}
  let start = 0

  for (let i = 0; i < str.length; i++) {
    let char = str[i]
    if (store[char]) {
      start = Math.max(start, store[char])
    }

    maxLength = Math.max(maxLength, i - start + 1)
    store[char] = i + 1
  }

  return maxLength
}

// This solves this in an O(n) using a sliding window and taking the index of the next character after each character to not duplicate.