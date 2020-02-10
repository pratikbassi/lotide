

const eqArrays = require('./eqArrays')

const assertArraysEqual = function (value1, value2) {

  if (eqArrays(value1, value2)) {
    return true;
  } else {
    return false;
  }
};

module.exports = assertArraysEqual;