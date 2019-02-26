// Write a function which takes in two strings and checks whether the
// characters in the first string from a subsequence of the characters
// in the second string. In other words, the function should check whether
// the characters in the first string appear somewhere in the second string 
// without their order changing.

let isSubsequence = (str1, str2) => {
  let first = 0
  let second = 0

  while (second < str2.length) {
    if (str1[first] === str2[second]) {
      first++
      second++
    } else {
      second++
    }
  }

  if (first === str1.length) return true
  else return false
}

// This was solved using O(n) as we go through only as much as the second word.