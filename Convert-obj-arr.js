/*
let affairs = {
  2018: {
    11: {
      29: ['дело111', 'дело112'
				, 'дело113'],
      30: ['дело121', 'дело122'
				, 'дело123'],
    },
    12: {
      30: ['дело211', 'дело212'
				, 'дело213'],
      31: ['дело221', 'дело222'
				, 'дело223'],
    },
  },
  2019: {
    12: {
      29: ['дело311', 'дело312'
				, 'дело313'],
      30: ['дело321', 'дело322'
				, 'дело323'],
      31: ['дело331', 'дело332'
				, 'дело333'],
    }
  },
}
function addAffair(year , month , day , affair ) {
   if(affairs[year] === undefined){
     affairs[year] = {};
   }
   if(affairs[year][month] === undefined){
     affairs[year][month] = {};
   }
   if(affairs[year][month][day] === undefined){
     affairs[year][month][day] = [];
   }
   affairs[year][month][day].push(affair);
}
addAffair(2020 ,1,11,'дело41');
addAffair(2020 ,1,11,'дело42');
addAffair(2020 ,1,12,'дело44');
console.log(affairs);
*/


/*
let data = {
  2018: {
    11: {
      29: [1, 2, 3],
      30: [4, 5],
    },
    12: {
      30: [6, 7],
      31: [8, 9],
    },
  },
  2019: {
    12: {
      29: [10, 11],
      30: [12, 13],
      31: [14, 15],
    }
  },
}

let arr = [];
for( let year in data){
    let month = data[year];
    for(let day in month){
      let affairs = month[day];
       for(let affair in affairs ){
         for(let elem of affairs[affair]){
           arr.push(elem);
         }
       }
    }
}
console.log(arr);
*/

let events = {
  '2019-12-29': ['name1',
		'name3', 'name5'
		, 'name7'],
  '2019-12-30': ['name4',
		'name8', 'name9'],
  '2019-12-31': ['name2'
		, 'name6'],
}

let arr = [];
for(let key in events){
   let arr2 = events[key];
     for(let elem of arr2){
         let obj = {};
         obj.date = key;
         obj.event = elem;
         arr.push(obj);
     }
}
console.log(arr);