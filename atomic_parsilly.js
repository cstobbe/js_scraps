function power(base,exponent) {
  if (exponent == 0) {
    return 1;
  } else {
    return base * power(base, exponent - 1);
  }
}

function multiply(number1, number2) {
  return number1 * number2;
}


console.log(multiply(5,2))
