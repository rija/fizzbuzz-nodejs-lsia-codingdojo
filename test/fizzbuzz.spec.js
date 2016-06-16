'use strict'

var expect = require('chai').expect

var fizzbuzz = require('../src/fizzbuzz')

describe('The FizzBuzz game: ', () => {

  describe('the check_number function', () => {
    it('should return Fizz if passed 3', () => {
      var result = fizzbuzz.check_number(3)
      expect(result).to.equal('Fizz')
    })

    it('should return Buzz if passed 5', () => {
      var result = fizzbuzz.check_number(5)
      expect(result).to.equal('Buzz')
    })

    it('should return 1 if passed 1', () => {
      var result = fizzbuzz.check_number(1)
      expect(result).to.equal(1)
    })

    it('should return Fizz if passed a multiple of 3', () => {
      var result = fizzbuzz.check_number(21)
      expect(result).to.equal('Fizz')
    })

    it('should return Buzz if passed a multiple of 5', () => {
      var result = fizzbuzz.check_number(10)
      expect(result).to.equal('Buzz')
    })

    it('should return FizzBuzz if passed a multiple of 3 and 5', () => {
      var result = fizzbuzz.check_number(15)
      expect(result).to.equal('FizzBuzz')
    })

  })
})
