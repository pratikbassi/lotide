
const eqObjects = require('./eqObjects')
const inspect = require('util').inspect;

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(value1, value2) {

  if (eqObjects(value1, value2)) {
    console.log(`🍏🍏🍏Assertion Passed: "${inspect(value1)}" === "${inspect(value2)}"`);
  } else {
    console.log(`🍎🍎🍎Assertion Failed: "${inspect(value1)}" === "${inspect(value2)}"`);
  }
};

module.exports = assertObjectsEqual;

assertObjectsEqual({a:1, b:3}, {a:1, b:2});