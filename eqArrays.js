
const assertEqual = require('./assertEqual');

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

module.exports = eqArrays;
