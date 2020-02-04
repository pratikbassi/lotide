const letterPositions = function (sentence) {
  const results = {};

  for (let i = 0; i < sentence.length; i++){
    if(sentence[i] !== " "){
      if (sentence[i] in results){
        results[sentence[i]].push(i);
      } else {
        results[sentence[i]] = [];
        results[sentence[i]].push(i);
      }
    }
  }


  return results;
}




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







let objects = { 
  l: [0],
  i: [1, 11],
  g: [2],
  h: [3, 5, 15, 18],
  t: [4, 14],
  o: [6, 19],
  u: [7, 20],
  s: [8, 21],
  e: [9, 16, 22],
  n: [12]
};
assertArraysEqual(letterPositions("lighthouse in the house"), objects );
