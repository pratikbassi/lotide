const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');
const assert = require('chai').assert;

describe('Returns the middle of the array', () => {
  it('returns [2,3] given [1,2,3,4]' , () => {
    assertArraysEqual(middle([1,2,3,4]), [2, 3] );
  });
  it('returns [] given [1]' , () => {
    assertArraysEqual(middle([1]), []);
  });
  it('returns [2,3] given [1,2,3,4]' , () => {
    assertArraysEqual(middle([3, 4, 5]), [4] );
  });
})

