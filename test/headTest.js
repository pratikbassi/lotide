const head = require('../head.js');
const assert = require('chai').assert;

describe('Should return the first item of every list', () => {
  it('returns 5 for [5,6,7]', () => {
    assert.strictEqual(head([1,2,3]), 1);
  }); 
  it('returns Hello for ["Hello", "Lighthouse", "Labs"]', () => {
    assert.strictEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
  }); 
  it('returns undefined for empty array', () => {
    assert.strictEqual(head([]), undefined);
  }); 
});

// assertEqual(head([5,6,7]), 5);
// assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
// assertEqual(head([]), undefined);
