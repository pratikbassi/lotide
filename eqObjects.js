const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`🍏🍏🍏Assertion Passed: "${actual}" === "${expected}"`);
  } else {
    console.log(`🍎🍎🍎Assertion Failed: "${actual}" === "${expected}"`);
  }
};

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