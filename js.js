function getDigitsSum(num) {
    let sum = 0;
    let arr =  String(num).split('');
    for (const elem of arr) {
        sum += +elem;
    }
    return sum;
}


function reduceNum(num) {
    let sum = getDigitsSum(num);
    if(sum <= 9){
      return sum;
    }else{
       return reduceNum(sum);
    }
}

console.log(reduceNum(2315));
