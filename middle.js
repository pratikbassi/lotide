
const middle = function (input){
  let i = 0;
  let middleArray = [];

  if(input.length === 0 || input.length === 1 || input.length === 2) {
    return middleArray;
  }
  if (input.length % 2 === 0){
    middleArray.push(input[(input.length/2) -1]);
    middleArray.push(input[input.length/2]);
  } else {
    middleArray.push(input[Math.floor(input.length /2)]);
  }
  return middleArray;
};

module.exports = middle;
