
const eqArrays = function (array1, array2) {

  let i = 0;

  if(array1.length !== array2.length){
    return false;
  }

  while(i < array1.length){
    if (array1[i] !== array2[i]){
      return false;
    }
    i++;
  }

  return true;
}

const assertArraysEqual = function (value1, value2) {

  if (eqArrays(value1, value2)) {
    console.log(`🍏🍏🍏Assertion Passed: "${value1}" === "${value2}"`);
  } else {
    console.log(`🍎🍎🍎Assertion Failed: "${value1}" === "${value2}"`);
  }
};


const middle = function (input){
  let i = 0;
  let middleArray = [];

  if(input.length === 0 || input.length === 1 || input.length === 2) {
    return middleArray;
  }
  if (input.length % 2 === 0){
    middleArray.push(input[(input.length/2) -1]);
    middleArray.push(input[input.length/2]);
  } else {
    middleArray.push(input[Math.floor(input.length /2)]);
  }
  return middleArray;
};

assertArraysEqual([2, 3], middle([1,2,3,4]));
assertArraysEqual([], middle([1]));
assertArraysEqual([1, 2, 3], middle([3, 4, 5]));