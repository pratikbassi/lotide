
const flatten = function (input) {
  let i = 0;
  let returnArray = [];

  while(i < input.length){
    if(Array.isArray(input[i])){
      let j = 0;
      while(j < input[i].length){
        returnArray.push(input[i][j]);
        j++;
      }
    } else {
      returnArray.push(input[i]);
    }
    i++;
  }
  return returnArray;
}

module.exports = flatten;