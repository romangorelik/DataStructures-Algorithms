// Write a funcition which acceps a base and an exponent. THe function should
// return the power of the base to the exponent. This function should mimic the
// functionality of Math.pow(). Try to do it recursively.

let power = (base, exp) => {
  if (exp === 0) return 1
  return base * power(base, exp - 1)
}

console.log(power(2, 4))