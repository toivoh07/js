function getOwnDivisors(num) {
	let arr = [];
	for (let i = 1; i < num; i++) {
		if(num % i == 0){
			arr.push(i);
		}
	}
	return arr;
}

function primeNum(n){
  for (var i = 2; i < n; i++) {
    if(n % i == 0){
      return true;
    }
  }
}


function getSimpleDivisors(num) {
 let arrDev = getOwnDivisors(num);
 let arr = [];
for (let elem of arrDev) {
  if (!primeNum(elem)) {
    arr.push(elem);
  }
}
return arr;
}
console.log(getSimpleDivisors(220));
