function power (base, exponent) {
  if (exponent === 0) {
    return 1
  } else {
    return base * power(base, exponent - 1)
  }
}

function multiply (number1, number2) {
  return number1 * number2
}

var a = multiply(2, 3)
var b = multiply(4, 5)

console.log(multiply(a, b))
