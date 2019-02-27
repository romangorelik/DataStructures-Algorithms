// Write a recursive function which accepts a number and returns the nth number
// in the Fibonacci sequence. Recall that the Fibonacci sequence is the sequence
// if whole numbers 1, 1, 2, 3, 5, 8... which starts with 1 and 1, and where every
// number thereafter is equal to the sum of the previous two numbers

let fib = (num) => {
  if (num <= 2) return 1
  return fib(num - 1) + fib(num - 2)
}