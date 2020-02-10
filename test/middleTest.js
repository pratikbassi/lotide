const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');

assertArraysEqual([2, 3], middle([1,2,3,4]));
assertArraysEqual([], middle([1]));
assertArraysEqual([1, 2, 3], middle([3, 4, 5]));