/*
let events = [
	{
		date:  '2019-12',
		event: 'name1'
	},
	{
		date:  '2019-12',
		event: 'name2'
	},
	{
		date:  '2019-11',
		event: 'name3'
	},
	{
		date:  '2019-11',
		event: 'name4'
	},
	{
		date:  '2020-10',
		event: 'name5'
	},
	{
		date:  '2020-10',
		event: 'name6'
	},
	{
		date:  '2020-11',
		event: 'name5'
	},
	{
		date:  '2020-11',
		event: 'name6'
	},
	{
		date:  '2020-12',
		event: 'name7'
	},
	{
		date:  '2020-12',
		event: 'name8'
	},
	{
		date:  '2020-12',
		event: 'name9'
	},
]

let obj = {};
for(let elem of events){
   let[year , month] = elem.date.split('-');
   if(obj[year] == undefined){
     obj[year] = {};
   }
   if(obj[year][month] == undefined){
     obj[year][month] = [];
   }
    obj[year][month].push(elem.event);
}
console.log(obj);
*/


let data = [
  {
    year: 2019,
    month: 11,
    day: 20,
    data: ['массив с данными']
	},
  {
    year: 2019,
    month: 11,
    day: 21,
    data: ['массив с данными']
	},
  {
    year: 2019,
    month: 12,
    day: 25,
    data: ['массив с данными']
	},
  {
    year: 2019,
    month: 12,
    day: 26,
    data: ['массив с данными']
	},
  {
    year: 2020,
    month: 10,
    day: 29,
    data: ['массив с данными']
	},
  {
    year: 2020,
    month: 10,
    day: 30,
    data: ['массив с данными']
	},
  {
    year: 2020,
    month: 11,
    day: 19,
    data: ['массив с данными']
	},
  {
    year: 2020,
    month: 11,
    day: 20,
    data: ['массив с данными']
	},
]

let obj = {};
for(let elem of data){
  let{year,month,day,data} = elem;
  if(obj[elem.year] == undefined){
    obj[year] = {};
  }
  if(obj[year][month] == undefined){
    obj[year][month] = {};
  }
  if(obj[year][month][day] == undefined){
    obj[year][month][day] = [];
  }
  obj[year][month][day] = data;
}
console.log(obj);