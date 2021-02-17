function each(arr, callback) {
  let result = [];
  let i = 0;
  for(let elem of arr){
    result.push(callback(elem, i++));
  }
  return result;
}


function strBack(str){
  let arr = str.split('');
  return arr.reverse().join('');
}
function getFirst(str){
  return str[0].toUpperCase() + str.slice(1);
}
function getMultiplication(elem, i) {
     return elem * i;
}

let arr = [2,4,5,6,7,8,9];
console.log(each(arr,getMultiplication));
