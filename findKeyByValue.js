

const findKeyByValue = function (inputObj, inputString) {
  for(const item in inputObj){
    if(inputObj[item] === inputString){
      return item;
    }
  }
  
};


module.exports = findKeyByValue;


