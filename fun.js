// function isPrime(num) {
// 	for (let i = 2; i < num; i++) {
// 		if (num % i == 0) {
// 			return false;
// 		}
// 	}
	
// 	return true;
// }

// function prime(num2) {  
// for (let i = 1; i < num2; i++) {
//     if(isPrime(i)){
//         console.log(i);
//     }  
// }
// }
// let num2 = 100;
// prime(num2);


// function getDigitsSum(num) {
// 	let sum = 0;
// 	let digits = String(num).split('');
	
// 	for (let digit of digits) {
// 		sum += Number(digit);
// 	}
	
// 	return sum;
// }

// function year() {
//     for (let i = 1; i <= 2030; i++) {
//         if(getDigitsSum(i) == 13 ) {
//             console.log(i);
//         }
//     }
// }

// year();

// let nums = [123, 456, 789];

// function reverse(num) {
//     return String(num).split('').reverse().join('')
// }

// let result = [];
// for (let num of nums) {
// 	result.push(reverse(num));
// }



// console.log(result); // выведет [321, 654, 987]

// let num1 = 234;
// let num2 = 531;

// function digitsFun(num) {
//     let digits = String(num).split('');
//     let digitsSum = 0;
//     for (let digit of digits) {
//         digitsSum += Number(digit);
//     }
//     return digitsSum;
// }
// function compareNum(num1,num2) {
//     if( digitsFun(num1) == digitsFun(num2)){
     
//         console.log('суммы цифр совпадают');
//     } else {
        
//         console.log('суммы цифр не совпадают');
//     }
// }
// compareNum(num1,num2);

// let nums = [12, 24, 35, 14];

// for (let num of nums) {
// 	console.log(num + ': ' + getDivisors(num).join(', '));
// }

// function getDivisors(num) {
// 	let result = [];
	
// 	for (let i = 2; i < num; i++) {
// 		if (num % i == 0) {
// 			result.push(i);
// 		}
// 	}
	
// 	return result;
// }

