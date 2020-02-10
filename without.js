

const assertArraysEqual = require('./assertArraysEqual.js');


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

module.exports = without;