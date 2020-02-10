const eqArrays = require('../eqArrays');
const assert = require('chai').assert;

describe('returns whether or not the arrays are the same', () => {
  it('returns true', () => {
    assert.strictEqual(eqArrays([[2, 3], [4]], [[2, 3], [4]]), true);
  }); 
  it('returns false', () => {
    assert.strictEqual(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]), false);
  }); 
  it('returns false', () => {
    assert.strictEqual(eqArrays([[2, 3], [4]], [[2, 3], 4]), false);
  }); 
});

