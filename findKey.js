exports.findKey = function (object, callBack) {
  for(let item in object){
    if(callBack(object[item])){
      return item;
    }
  }
}

/// TESTING BELOW

/*** 
result = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2); // => "noma"

console.log(result);

***/