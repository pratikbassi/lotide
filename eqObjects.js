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

const eqObjects = function(object1, object2) {
  let recursiveFlag = true;
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    //console.log('THE OBJECTS WERE DIFFERENT LENGTHS');
    recursiveFlag = false;
  }
  if (typeof object1 === typeof object2) {
    for (let item in object1) {
      if (typeof object1[item] === 'object' && !Array.isArray(object1[item])) {
        recursiveFlag = eqObjects(object1[item], object2[item]);
      } else if (Array.isArray(object1[item]) && Array.isArray(object2[item])) {
        if (!eqArrays(object1[item], object2[item])) {
          //console.log('THE ARRAYS DID NOT MATCH');
          recursiveFlag = false;
        }
      } else {
        if (!(object1[item] === object2[item])) {
          //console.log('THE ITEMS DID NOT MATCH');
          recursiveFlag = false;
        }
      }
    }
  } else {
    //console.log('THE ITEM TYPES DID NOT MATCH');
    recursiveFlag = false;
  }
  return recursiveFlag;
};

/*
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(eqObjects(ab, ba)); // => true

const abc = { a: "1", b: "2", c: "3" };
console.log(eqObjects(ab, abc)); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(eqObjects(cd, dc)); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(eqObjects(cd, cd2)); // => false


console.log(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 })); // => true

console.log(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 })); // => false
console.log(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 })); // => false

console.log(eqObjects({ a: { y: 0, z: 1 }, b: { m: 0, n: 1 } }, { a: { y: 0, z: 1 }, b: { m: 0, n: 3 } })); // => false
*/