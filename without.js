
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
