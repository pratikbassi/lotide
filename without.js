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


const without = function(source, itemsToRemove){
  let i = 0;
  returnArray = [];

  while(i < source.length){
    let j = 0;
    let add = true;
    while(j < itemsToRemove.length){
      if(source[i] === itemsToRemove[j]){
        add = false;
      }
      j++;
    }
    if(add === true){
      returnArray.push(source[i]);
    }
    i++;
  }
  return returnArray;

};

assertArraysEqual([1, 2, 3, 4], without([1,2,3,4,5], [5]));
assertArraysEqual([1, 2, 3, 4], without([1,2,3,4,5], [1,2,3,4]));
assertArraysEqual([], without([1,2,3,4,5], [1,2,3,4,5]));
assertArraysEqual([1, 2, 3, 4, 5], without([1,2,3,4,5], []));
