

var fizzbuzz = {
  check_number : (num) => {
    if (num % 3 === 0 || num.toString().search(3) > -1 ) {
      return 'Fizz'
    }
    if (num % 5 === 0 || num.toString().search(5) > -1 ) {
      return 'Buzz'
    }
    return false
  }
}


module.exports = fizzbuzz
