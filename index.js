//1 задача (в цикле показывает все возраста)
/*let ages = {
    "1-17": "ребенок",
    "18-30": "молодой",
    "30-55": "зрелый",
    "55-100": "дед"
};
for (let code in ages) {
    console.log(ages)
}
*/
//2 задача
/*let arr = [1, 2, 3, 4, 5];
let result = arr.filter(function(elem) {
	if (elem % 2 == 0) {
		return true;
	} else {
		return false;
	}
});*/
 //2 вариант
/*let arr = [1, 2, 3, 4, 5];

let result = arr.filter(elem => elem % 2 == 0);
console.log(result);  выведет [2, 4] четные
3 задача
let arr = [1, 2, 3, 4, 5];

let result = arr.filter(elem => elem % 2 == 0);
console.log(result);  выведет [1, 3, 5] нечетные*/

//4 задача
//не понял, пропускаю


//5 задача
/*let gvozd = [1,2,3,4,5];
let ios = gvozd.reduce((sum, current) => sum + current)/gvozd.length.toFixed(1);
console.log(ios)*/
// выведет среднее арифмет
//6 задача
/*const dew = [1,2,3,4,5];
dew.push(1); dew.splice(0,1);
console.log(dew)*/
// сначала засунул 1 элем в конец массива, затем удалил 1 элемент с начала
//2 вариант
/*const dew2 = [1,2,3,4,5];
dew2.splice(dew2.length -1, 1, dew2[0]); dew2.shift();
console.log(dew2)*/
//7 задача
/*let people = [{name: 'Иван', age: 23}, {name: 'Vladik', age: 27}, {name: 'Kolya', age: 35}, {name: 'Tima', age: 38}];*/
/*function arr (people) {
    return arr;

}
console.log(arr)*/
//8 задача 
/*let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  }
  let sum = 0;
  for ( let key in salaries ) {
    sum += salaries[key];

  }
console.log(sum)*/
//9 задача
//есть решение, решил оставить его

