// Given two strings, write a function to determine if the second
// string is an anagram of the first. An anagrams is a word, phrase
// or name formed by rearranging the letters of another,
// such as cinema, formed from iceman.

let validAnagram = (str1, str2) => {
  let store = {}

  for(let i = 0; i < str1.length; i++) {
    let letter = str1[i]
    if (!store[letter]) {
      store[letter] = 1
    } else {
      store[letter]++
    }
  }

  for (let i = 0; i < str2.length; i++) {
    let letter = str2[letter]
    if (!store[letter]) {
      return false
    } else {
      store[letter]--
    }
  }

  return true
}

// This is an O(n) solution, as opposed to checking if each letter is included in the other with a counter.