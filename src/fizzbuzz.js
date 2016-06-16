'use strict'

module.exports = {
  check_number: check_number
}


function check_number(number) {

  if ( number % 3 === 0 && number % 5 === 0 ) {
    return 'FizzBuzz'
  }

  if ( number % 5 === 0 ) {
    return 'Buzz'
  }

  if ( number % 3 === 0 ) {
    return 'Fizz'
  }

  if ( number.toString().search('5') > -1 ) {
    return 'Buzz'
  }

  if ( number.toString().search('3') > -1 ) {
    return 'Fizz'
  }

  return number
}


for ( var i=1 ; i<=100 ; i++) {
  console.log( check_number(i) )
}
