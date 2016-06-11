'use strict';

var expect = require("chai").expect;
var fizzbuzz = require("../src/fizzbuzz");

describe ('fizzbuzz game', () => {

  describe ('testing function check', () => {

    it('should return Fizz when passed 3', () => {
      var result = fizzbuzz.check(3) ;
      expect(result).to.equal('Fizz');
    })

    it('should return Buzz when passed 5', () => {
      var result = fizzbuzz.check(5) ;
      expect(result).to.equal('Buzz');
    })

    it ('should return Fizz when passed 9', () => {
      var result = fizzbuzz.check(9) ;
      expect(result).to.equal('Fizz');

    })

    it ('should return Buzz when passed 10', () => {
      var result = fizzbuzz.check(10);
      expect(result).to.equal('Buzz');
    })

    it ('should return FizzBuzz when passed 15', () => {
      var result = fizzbuzz.check(15);
      expect(result).to.equal('FizzBuzz');
    })

    it ('should return false with number not divisible by 3 or by 5', () => {
      var result = fizzbuzz.check(11);
      expect(result).to.equal(false);

    })


  })


})
