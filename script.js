function getRandomInt(min,max){
  return Math.floor(Math.random(
		) * (max - min 
		+ 1)) + min; 
}
/*
function getRandomIntInArr(arr) {
  
 return arr[getRandomInt(0,arr.length - 1)];
}
let arr1 = [3,44,2,74,9,15,0];
let result = 0;
for (let i = 0; i < 3 ; i++){
  result += getRandomIntInArr(arr1);
}
*/
function shuffle(arr) {
  let result = [];
  while (arr.length > 0) {
    let random = getRandomInt(0,arr.length- 1);
    let elem = arr.splice(random,1)[0];
    result.push(elem);
  }
  return result;
}

function range(begin,end) {
  let result = [];
  for (let i = begin; i <= end; i++) {
    result.push(i);
  }
  return result;
}

function rangeRand(begin,end){
  return shuffle(range(begin,end));
}
console.log(rangeRand(5,25));
