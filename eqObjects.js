const eqArrays = require('./eqArrays');

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

module.exports = eqObjects;