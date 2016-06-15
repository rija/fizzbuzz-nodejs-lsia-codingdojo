'use strict'

var expect = require('chai').expect
var fizzbuzz = require('../src/fizzbuzz')


describe ('The FizzBuzz Game: ', () => {

  describe ('check_number', () => {

    it('should return Fizz if passed 3', () => {
      var result = fizzbuzz.check_number(3)
      expect(result).to.equal('Fizz')
    })

    it('should return Buzz if passed 5', () => {
      var result = fizzbuzz.check_number(5)
      expect(result).to.equal('Buzz')
    })

    it('should return Fizz if passed a number divisible by 3', () => {
      var result = fizzbuzz.check_number(6)
      expect(result).to.equal('Fizz')
    })

    it('should return Buzz if passed a number divisible by 5', () => {
      var result = fizzbuzz.check_number(10)
      expect(result).to.equal('Buzz')
    })

    it('should return false if passed a number notdivisible by 3 or 5', () => {
      var result = fizzbuzz.check_number(7)
      expect(result).to.equal(false)
    })


  })

})
