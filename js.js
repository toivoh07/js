// function getDigitsSum(num) {
//     let sum = 0;
//     let arr =  String(num).split('');
//     for (const elem of arr) {
//         sum += +elem;
//     }
//     return sum;
// }


// function reduceNum(num) {
//     let sum = getDigitsSum(num);
//     if(sum <= 9){
//       return sum;
//     }else{
//        return reduceNum(sum);
//     }
// }

// console.log(reduceNum(2315));

// function func(arr) {
//     let str = '';
//    for (const elem of arr) {
//        if(typeof elem == 'object'){
//            str += func(elem);
//        }else{
//            str += elem;
//        }
//    }
//     return str;
// }

// console.log( func(['a', ['b', 'c', 'd'], ['e', 'f', ['g', ['j', 'k']]]] ));

function func(arr) {

  for (let i = 0; i < arr.length; i++) {
     if(typeof arr[i] == 'object'){
         arr[i] = func(arr[i]);
     }else{
         arr[i] = arr[i] * arr[i];
     }
  }
  return arr;
}

console.log(func([1, [2, 7, 8], [3, 4], [5, [6, 7]]]));