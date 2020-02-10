

const countOnly = function(allItems, itemsToCount) {
  returnObj = {}

  for(const item of allItems){
    if(item in itemsToCount && itemsToCount[item] == true){
      if(item in returnObj){
        returnObj[item] = returnObj[item] + 1;
      } else {
        returnObj[item] = 1;
      }
    }
  }

  return returnObj;
  
}


module.exports = countOnly;


//TESTS BELOW THIS
