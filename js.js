function getLastDay(month,year) {
   let lastDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
   if(month == 1){
      let date = new Date(year,month +1,0);
      return date.getDate();
   }else{
      return lastDays[month];
   }
}

console.log(getLastDay(5,2025));