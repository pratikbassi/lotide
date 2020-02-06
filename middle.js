const eqArrays = function (array1, array2) {
  let recursiveFlag = true;
  if(array1.length !== array2.length){
    //console.log('LENGTHS DID NOT MATCH');
    recursiveFlag = false;
  }

  for(let i = 0; i < array1.length; i++){
    if(Array.isArray(array1[i]) && Array.isArray(array2[i])){
      //console.log('RECURSION REACHED');
      recursiveFlag = eqArrays(array1[i], array2[i]);
    }
    else if ((!Array.isArray(array1[i]) && Array.isArray(array2[i])) || (Array.isArray(array1[i]) && !Array.isArray(array2[i]))){
      //console.log('TYPES DID NOT MATCH');
      recursiveFlag = false;
    } else {
      if(array1[i] !== array2[i]){
        //console.log('ITEMS DID NOT MATCH');
        recursiveFlag = false;
      }
    }
  }
  

  return recursiveFlag;
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