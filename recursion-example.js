function power (base, exponent) {
  console.log('Okay, here we go, I just started running the *power* function')
  console.log('The arguments are:')
  console.log('base = ' + base)
  console.log('exponent = ' + exponent)
  console.log('')

  if (exponent === 0) {
    console.log('exponent is zero, return 1!!!!!!')
    console.log('')
    return 1
  } else {
    console.log('exponent is not 0, exponent is: ' + exponent)
    console.log('returning ' + base + ' * power(' + base + ', ' + exponent + ' - 1)')
    console.log('')
    return base * power(base, exponent - 1)
  }
}

console.log('result', power(2, 3))
