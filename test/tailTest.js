const tail = require('../tail');
const assertArraysEqual = require('../assertArraysEqual');
const assert = require('chai').assert;

describe('Should return the first item of every list', () => {
  it('returns the last two items of the input list', () => {
    assertArraysEqual(tail(["Yo Yo", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  }); 
});


