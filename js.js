function getSum(...rest) {
   let sum = 0;
   let count = 0;
   for (const elem of rest) {
      sum += elem;
      count++;
   }
   return sum / count ;
}


console.log(getSum(1,2,3,4,5,6,7));