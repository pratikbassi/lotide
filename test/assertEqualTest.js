const assertEqual = require('../assertEqual');
const assert = require('chai').assert;

describe('returns whether or not the items are the same', () => {
  it('returns false', () => {
    assert.strictEqual(assertEqual("Lighthouse Labs", "Bootcamp"), undefined);
  }); 
  it('returns true', () => {
    assert.strictEqual(assertEqual(1, 1), undefined);
  }); 
  it('returns false', () => {
    assert.strictEqual(assertEqual(2, 1), undefined);
  }); 
  it('returns true', () => {
    assert.strictEqual(assertEqual("hello", "hello"), undefined);
  }); 
});





