const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`🍏🍏🍏Assertion Passed: "${actual}" === "${expected}"`);
  } else {
    console.log(`🍎🍎🍎Assertion Failed: "${actual}" === "${expected}"`);
  }
};



const countLetters = function(inputString){
  let spaceLess = inputString.replace(/\s/g, '')
  let returnObj = {}


  for (const character of spaceLess){
    if (character in returnObj){
      returnObj[character] = returnObj[character] + 1;
    } else{
      returnObj[character] = 1;
    }
  }

  return returnObj
}




console.log(countLetters("lighthouse in the house"));
