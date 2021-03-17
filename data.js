// let now = new Date();
// let date1 = new Date(now.getFullYear(),now.getMonth(),now.getDate(),24);
// let date = new Date(now.getFullYear(),now.getMonth(),now.getDate() ,now.getHours());

// console.log((date1 - date) /1000/60/60);

// let now = new Date();
// //let date = new Date(2000,0,1);
// let nowYear = now.getFullYear();
// let count = 0;
// for (let i = 2000; i <= nowYear; i++) {
//    let date = new Date(i,0,1);
  
//    if(date.getDay() == 6 || date.getDay() == 0){
//       console.log(i);
//       count++;
//    }
   
// }
// console.log(count);

// let now = new Date();
// let year = now.getFullYear();
// let count = 0;
// for (let i = 1; i < 365; i++) {
//     let date = new Date(year,count,i);
//     if(date.getDay() == 5 && date.getDate() == 13){
//        let d = new Date(year, 0, i);
//        console.log(d);
//        count++;
//     }
// }

// let now = new Date();
// let date = new Date(now.getFullYear(), now.getMonth(), now.getDate());
// let date1 = new Date(now.getFullYear(), 11, 31);
// console.log((date1 - date) /1000/60/60/24);

// let now = new Date();
// let data = new Date(now.getFullYear(),2,0);
// if(data.getDate() == 29){
//     console.log('високосный');
// }else{
//     console.log('невисокосный');
// }

// for (let i = 0; i < 6; i++) {
//     let now = new Date();
//     let data = new Date(now.getFullYear() - i,2,0);
//    if(data.getDate()== 29){
//        console.log(data.getFullYear());
//        break;
//    }

// }

let now  = new Date();
let date = new Date(now.getFullYear(), 4, 8); // текущий год

let diff = date - now; // разница

if (diff > 0) {
	console.log('будет через' + diff /1000/60/60/24 + 'дней');
} else if (diff == 0) {
	console.log('сегодня');
} else {
	console.log('будет в следующем году');
}