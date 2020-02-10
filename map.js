const map  = function (array, callBack){
  let newArray = [];

  for (let item of array) {
    newArray.push(callBack(item))
  }

  return newArray;
};

module.exports = map;



