

var fizzbuzz = {
  check_number : (num) => {
    if (num % 3 === 0 ) {
      return 'Fizz'
    }
    if (num % 5 === 0 ) {
      return 'Buzz'
    }
    return false
  }
}


module.exports = fizzbuzz
