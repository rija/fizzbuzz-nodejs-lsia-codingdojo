var expect = require('chai').expect

var fizzbuzz = require('../src/fizzbuzz')


describe('The FizzBuzz Game:', () => {
  describe('the check_number function', () => {
    it('should return Fizz if passed 3', () => {
      var result = fizzbuzz.check_number(3)
      expect(result).to.equal('Fizz')
    })

    it('should return Buzz if passed 5', () => {
      var result = fizzbuzz.check_number(5)
      expect(result).to.equal('Buzz')
    })

    it('should return 1 if passed 1 (not multiple of 3 nor 5)', () => {
      var result = fizzbuzz.check_number(1)
      expect(result).to.equal(1)
    })

    it('should return Fizz if passed 9 (multiple of 3)', () => {
      var result = fizzbuzz.check_number(9)
      expect(result).to.equal('Fizz')
    })

    it('should return Fizz if passed 10 (multiple of 5)', () => {
      var result = fizzbuzz.check_number(10)
      expect(result).to.equal('Buzz')
    })

    it('should return FizzBuzz if passed 15 (multiple of 3 & 5)', () => {
      var result = fizzbuzz.check_number(15)
      expect(result).to.equal('FizzBuzz')
    })

    it('should return Fizz if passed 31 (has 3 in it)', () => {
      var result = fizzbuzz.check_number(31)
      expect(result).to.equal('Fizz')
    })

    it('should return Buzz if passed 52 (has 5 in it)', () => {
      var result = fizzbuzz.check_number(52)
      expect(result).to.equal('Buzz')
    })





  })
})
