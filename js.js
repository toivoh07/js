function each(arr, callback) {
  let result = [];
  for(let elem of arr){
    result.push(callback(elem));
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

let arr = ['abc','abc','abc'];
console.log(each(arr,getFirst));
