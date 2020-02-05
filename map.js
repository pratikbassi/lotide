const map  = function (array, callBack){
  let newArray = [];

  for (let item of array) {
    newArray.push(callBack(item))
  }

  return newArray;
};





////TESTING BELOW



/*** 
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

const words = ["ground", "control", "to", "major", "tom"];

assertArraysEqual(map(words, (x => x.length)), [6, 7, 2, 5, 3]);

***/