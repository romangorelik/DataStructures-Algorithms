// Write a recursive function to find the factorial of the number provided.

let factorialRecursion = (num) => {
  if (num === 0) return 1
  if (num === 1) return 1
  return num * factorialRecursion(num - 1)
}

