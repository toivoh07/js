// function each(arr, callback) {
//   let result = [];
//   let i = 0;
//   for(let elem of arr){
//     result.push(callback(elem, i++));
//   }
//   return result;
// }


// function strBack(str){
//   let arr = str.split('');
//   return arr.reverse().join('');
// }
// function getFirst(str){
//   return str[0].toUpperCase() + str.slice(1);
// }
// function getMultiplication(elem, i) {
//      return elem * i;
// }

// let arr = [2,4,5,6,7,8,9];
// console.log(each(arr,getMultiplication));

// function filter(arr,callback) {
//   let result = [];
//     for (let i = 0; i < arr.length; i++) {
//       if(callback(arr[i], i)){
//         result.push(arr[i]);
//       }  
//     } 
//   return result;
// }

// function getEven(elem, i) {
//   if(elem.length >= 1 && elem.length <= 3){
//     return true;
//   }else{
//     return false;
//   }
// }

// let arr = ['2,4,5,6,7,8,9', 'wt' , '', 'w', 'qwe'];
// console.log(filter(arr,getEven));
/*
function every(arr,callback) {
 for (const elem of arr) {
   if (!callback(elem)) {
     return false;
   }
 }
 return true;
}

function isTrue(elem) {
  return elem > 0;
}
let arr = [2,4,5,6,8,9];
console.log(every(arr, isTrue));

function some(arr, callback) {
  for (const elem of arr) {
    if (callback(elem)) {
      return true;
    }
  }
  return false;
}

function isTrue(elem) {
  return elem < 0;
}
let arr = [2, 4, 5, -6, 8, 9];
console.log(some(arr, isTrue));
*/

function  alternate(arr, callback1, callback2){
  let result = [];
  for (var i = 1; i < arr.length + 1; i++) {
    if(i % 2 != 0){
      result.push(callback1(arr[i]));
    }else if(i % 2 == 0){
      result.push(callback2(arr[i]));
    }
  }
}
function getEven(elem){
  return elem + '?';
}
function getOdd(elem){
  return elem + '!';
}
let arr = ['a','b','c','d','e'];
