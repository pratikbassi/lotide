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


const flatten = function (input) {
  let i = 0;
  let returnArray = [];

  while(i < input.length){
    if(Array.isArray(input[i])){
      let j = 0;
      while(j < input[i].length){
        returnArray.push(input[i][j]);
        j++;
      }
    } else {
      returnArray.push(input[i]);
    }
    i++;
  }
  return returnArray;
}

console.log(flatten([1, 2, [3, 4], 5, [6]]));

assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);