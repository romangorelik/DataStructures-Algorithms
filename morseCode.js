// Write a function that translates an array of strings into morse code and 
// count how many different words are there in morse code.

const morse = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]
const alph = 'abcdefghijklmnopqrstuvwxyz'.split('')

let uniqueMorseRepresentations = (words) => {
  let storage = new Set()
  let keys = {}

  for (let i = 0; i < alph.length; i++) {
    keys[alph[i]] = morse[i]
  }

  for (let i = 0; i < words.length; i++) {
    let word = ''
    for (let j = 0; j < words[i].length; j++) {
      word += keys[words[i][j]]
    }
    storage.add(word)
    word = ''
  }

  return storage.size
}

// This solves it in O(n + m) as it goes through the entire words array (n) and the entire each word (m). Faster than using
// indexOf as it doesn't have to loop to find the index.