function getInt(...arr) {
   
}

function inArrays(elem , arrs) {
   
}

function inArray(arr,num) {
   return arr.indexOf(num) != -1;
}



//ДЕСТРУКТУРИЗАЦИЯ

// let arr = ['Иван', 'Иванов', 'отдел разработки', 'программист', 2000];

// let [name ,surname ,department,position,salary] = arr;
// console.log(name ,surname ,department,position,salary);

// function func() {
// 	return ['Иван', 'Иванов', 'отдел разработки'
// 		, 'программист', 2000]; 
// }
// let [name ,surname ,department,position,salary] = func();
// console.log(name ,surname ,department,position,salary);

// let arr = ['Иван', 'Иванов', 'отдел разработки'
// 	, 'программист', 2000]; 
// let [,,department,position,] = arr;
// console.log(department,position);

// let arr = ['Иван', 'Иванов', 'отдел разработки'
// 	, 'программист', 2000]; 

//    let [name, surname, ...info] = arr;
//    console.log(name,surname, info);

// let arr = ['Иван', 'Иванов', 'отдел разработки'];
// let [name, surname, department , position = 'джуниор' ] = arr;
// console.log(name, surname, department , position);

// let arr = [];
// function func1() {
//    return (new Date).getFullYear();
// }
// function func2() {
//    return (new Date).getMonth();
// }
// function func3() {
//    return (new Date).getDay();
// }

// let [year = func1(), month = func2(), day = func3()] = arr;
// console.log(year,month,day);


// let options = {
// 	color: 'red',
// 	width:  400,
// 	height: 500,
// };
// let {color , width , height} = options;
// console.log(color,width , height);

// function func(department,[name,surname], hired ) {
//     let arr = hired.split('-');
//     let[year,month,day] = arr
//    console.log(department,name,surname,year,month,day );
// }

// func( 'отдел разработки', ['Иван', 'Иванов'], '2018-12-31' );


// function func({color = 'black',width,height}) {
// 	console.log(color,width,height);
// }

// func( { width: 400, height: 500} );