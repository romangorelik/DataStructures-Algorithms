// Youre given strings representing the types of stones that are jewels, and
// representing the stones you have. Each character in jewels is a type of stone
// you have. You want to know how many of the stones you have are also jewels. 

let numJewelsInStones = (J, S) => {
  let storage = new Set()

  for (let i = 0; i < J.length; i++) {
    storage.add(J[i])
  }
  
  let count = 0
  
  for(let i = 0; i < S.length; i++) {
    if (storage.has(S[i])) count++
  }
  
  return count
}

// This solves the function in O(n) as it never uses includes method, and uses a Set since we only need distinct characters.