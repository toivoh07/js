// function getRandomInt(min, max) {
// 	return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// function shuffle(arr){
// 	let result = [];
// 	while (arr.length > 0) {
// 		let random = getRandomInt(0,arr.length - 1);
// 		let elem = arr.splice(random,1)[0];
// 		result.push(elem);
// 	}
// 	return result;
// }

// function randoms(arr, length) {
// 	return first(shuffle(arr), length);
// }

// function first(arr,length){
// 	return arr.splice(0,length);
// }





// function isLucky(num) {
// 	let str = normalizeNum(num);
// 	let sum1 = Number(str[0])+Number(str[1])+Number(str[2]);
// 	let sum2 = Number(str[3])+Number(str[4])+Number(str[5]);
// 	return sum1 == sum2;
// }

function normalizeNum(num) {
	let str = String(num);
	if(str.length == 5){
		str = '0' + str;
	}
	if(str.length == 4){
		str = '00' + str;
	}
	return str;
}

function getLuckyTickets() {
	let result = [];
	for (let i = 1000; i < 999999; i++) {
	    if(isLucky(i)){
			result.push(i);
		}
	}
	return result;
}

function isLucky(str){
	let del = str.length / 2;
    let sum1 = 0;
	let sum2 = 0;
	for (let i = 0; i < del; i++) {
	    sum1 += Number(str[i]);	
	}
	for (let i = del; i <= str.length - 1; i++) {
	    sum2 += Number(str[i]);	
	}

	return sum1 == sum2;

}
console.log(isLucky('10231023'));