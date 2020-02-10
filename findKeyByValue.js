const assertEqual = function(actual, expected) {

  if (actual === expected) {
    console.log(`🍏🍏🍏Assertion Passed: "${actual}" === "${expected}"`);
  } else {
    console.log(`🍎🍎🍎Assertion Failed: "${actual}" === "${expected}"`);
  }
};

exports.findKeyByValue = function (inputObj, inputString) {
  for(const item in inputObj){
    if(inputObj[item] === inputString){
      return item;
    }
  }
  


};







const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);