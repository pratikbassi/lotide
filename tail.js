const assertEqual = require('./assertEqual');

const tail = function(inputArray) {
  let returnArray = [];
  let i = 1;

  while (i < inputArray.length) {
    returnArray.push(inputArray[i]);
    i++;
  }

  return returnArray;
};

// Test Case: Check the original array

module.exports = tail;