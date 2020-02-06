const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`🍏🍏🍏Assertion Passed: "${actual}" === "${expected}"`);
  } else {
    console.log(`🍎🍎🍎Assertion Failed: "${actual}" === "${expected}"`);
  }
};

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

const eqObjects = function (object1, object2) {
  if(object2.length !== object1.length){
    return false;
  }
  for (const item in object1){
    if(Array.isArray(object1[item])){
      if(!(item in object2)|| !( Array.isArray(object2[item]) ) || !(eqArrays(object1[item], object2[item]))){
        return false;
      }
    } else{
      if(!(item in object2) || (object1[item] !== object2[item])){
        return false;
      }
    }
  }


  for (const item in object2){
    if(Array.isArray(object2[item])){
      if(!(item in object1)|| !( Array.isArray(object1[item]) ) || !(eqArrays(object1[item], object2[item]))){
        return false;
      }
    } else{
      if(!(item in object1) || (object1[item] !== object2[item])){
        return false;
      }
    }
  }
  return true;
}




// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(value1, value2) {
  const inspect = require('util').inspect;


  if (eqObjects(value1, value2)) {
    console.log(`🍏🍏🍏Assertion Passed: "${inspect(value1)}" === "${inspect(value2)}"`);
  } else {
    console.log(`🍎🍎🍎Assertion Failed: "${inspect(value1)}" === "${inspect(value2)}"`);
  }
};

assertObjectsEqual({a:1, b:3}, {a:1, b:2});