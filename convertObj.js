let data = [
	{
		country: 'Россия',
		city:    'Москва',
	},
	{
		country: 'Беларусь',
		city:    'Минск',
	},
	{
		country: 'Россия',
		city:    'Питер',
	},
	{
		country: 'Россия',
		city:    'Владивосток',
	},
	{
		country: 'Украина',
		city:    'Львов',
	},
	{
		country: 'Беларусь',
		city:    'Могилев',
	},
	{
		country: 'Украина',
		city:    'Киев',
	},
];

let obj = {};
let ru = [];
let by = [];
let ua = [];
for(const elem of data){
      if(elem.country == 'Россия'){
		  ru.push(elem.city);
		  obj[elem.country] = ru;
	  }
	  if(elem.country == 'Беларусь'){
		by.push(elem.city);
		obj[elem.country] = by;
	}
	if(elem.country == 'Украина'){
		ua.push(elem.city);
		obj[elem.country] = ua;
	}
		
}
console.log(obj);