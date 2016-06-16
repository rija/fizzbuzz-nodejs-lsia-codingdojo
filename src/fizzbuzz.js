module.exports = {
  check_number: check_number
}

function check_number(number) {

  if (0 === number % 3 && 0 === number % 5) {
    return 'FizzBuzz'
  }

  if (0 === number % 3 || number.toString().search('3') > -1 ) {
    return 'Fizz'
  }

  if (0 === number % 5 || number.toString().search('5') > -1) {
    return 'Buzz'
  }


  return number
}

for( var i=1 ; i <= 100 ; i++) {
  console.log( check_number(i) )
}
