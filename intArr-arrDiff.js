/*
let arr1 = [1,4,5,6];
let arr2 = [2,3,4,6];
*/
function inInt(arr1,arr2) {
  let result = [];
   for(let elem of arr1){
     if(inArr(elem,arr2)){
       result.push(elem);
     }
     
   }
   return result;
}

function inArr(num,arr) {
  return arr.indexOf(num) !== -1;
}
/*
function getDif(arr1,arr2) {
  let result = [];
   let simpl1 = getSimpleDif(arr1,arr2);
   let simpl2 = getSimpleDif(arr2,arr1);
   return result.concat(simpl1,simpl2);
}

function getSimpleDif(arr1,arr2) {
  let result = [];
    for (let elem of arr1) {
      if (!inArr(elem, arr2)) {
        result.push(elem);
      }
    }
    return result;
}
*/

function getGreatestCommonDivisor(num1,num2){
  let divisors1 = getDivisor(num1);
  let divisors2 = getDivisor(num2);
  
 return Math.max.apply(null,inInt(divisors1,divisors2)) == 1;

  
}


function getDivisor(num){
  let result = [];
  for (var i = 1; i < num; i++) {
    if(num % i == 0){
      result.push(i);
    }
  }
  return result;
}
console.log(getGreatestCommonDivisor(13,7));