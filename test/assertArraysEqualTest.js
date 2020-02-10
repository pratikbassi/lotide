const assertArraysEqual = require('../assertArraysEqual');
const assert = require('chai').assert;


describe('Should assert arrays are equal', () => {
  it('returns a pass', () => {
    assert.strictEqual(assertArraysEqual([0],[0]), undefined);
  }); 
  it('returns a fail', () => {
    assert.strictEqual(assertArraysEqual([0,1,2],[0,1,2,3]), undefined);
  }); 
});



