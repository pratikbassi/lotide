

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

module.exports = countLetters;


