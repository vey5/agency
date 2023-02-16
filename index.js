//1 задача (в цикле показывает все возраста)
// Коммент: немного неправильно сделана задача, надо переделать
// Мб надо выводить по условию

 /*for (let i = 0; i < 101; i++) {
     if (i > 0 && i <= 17)   {
       console.log('ребенок')
       }
       if ( i > 17 && i <= 30) {
       console.log('молодой')
     }
         
    //хз кароче, в цикле заданы условия, но вычитает 2 значение возвраста из 1 
  }*/
  
//2 задача
//коммент: сейчас все верно, но возвращается массив четных или нечетных чиел, а нужно вернуть именно true если есть четные числа
//либо вернуть false. То же самое относится к третьей задаче

/*function arrow (element) {
 
    if (element % 2 !== 0) {
        return true;
    } else {
        return false;
    }
}
const arr = [1, 2, 3, 4, 5,];
const result = arrow([1, 2, 3, 4, 5,])

console.log(result)*/
 
//3 задача
/*function arrow (element) {
 
    if (element % 2 === 0) {
        return true;
    } else {
        return false;
    }
}
const arr = [1, 2, 3, 4, 5,];
const result = arrow([1, 2, 3, 4, 5,])

console.log(result)*/

//4 задача
//не понял, пропускаю

// Пример
// объявляем функцию
// const findNumber = (input /* тут ее аргумент */) => {
//     // тут мы работаем с аргументом
//     // Ниже строка просто для примера
//     const her = input.concat([101])

//     // тут мы возвращаем результат
//     return her
// }

// а тут мы взыываем функцию и записываем результат в переменную result
// const result = findNumber([1, 2, 3, 4])
// кратно 5 вернул новый массив
// console.log(result)
/*const findNumber = (numeric) => {
      const her = numeric.filter(numeric => numeric % 5 == 0 )
      return her
}
    numeric = [1,2,5,12,15,21];
    const result = findNumber([1,2,5,12,15,21])
console.log(result)*/

//5 задача
// коммент: решение гуд, но надо обренуть все это дело в функцию, передать в нее массив gvozd и вернуть из нее результат
// среднее арифмет вывел функцией)
// let gvozd = [1,2,3,4,5];
// let ios = gvozd.reduce((sum, current) => sum + current)/gvozd.length.toFixed(1);
// console.log(ios)
/*const findNumba = (gvozd) => {
  const her =  gvozd.reduce((sum, current) => sum + current)/gvozd.length.toFixed(1);
  return her
    
}
gvozd = [1,2,3,4,5]
const result = findNumba([1 ,2 ,3 ,4 ,5])
console.log(result)*/
//6 задача
// коммент: решение гуд, но надо обренуть все это дело в функцию, передать в нее массив gvozd и вернуть из нее результат
// const dew = [1,2,3,4,5];
// добавилось число в конец массива, но сам массив с изменениями не вернулся

 /*const findZumba = (dew) => {

    dew.push(1); dew.splice (0, 1)
 
 return dew
 }

 console.log(findZumba([1, 2, 3, 4, 5]))
  dew = [1,2,3,4,5];*/
//  const result = findZumba([1,2,3,4,5])
//  console.log(result)
// console.log(dew)
// сначала засунул 1 элем в конец массива, затем удалил 1 элемент с начала
//2 вариант
// тут вывелась последняя цифра массива
 /*const findZalupa = (dew2) => {
 const biba = dew2.splice(dew2.length -1, 1, dew2[0]); dew2.shift();
 return biba
 }
 dew2 = [1,2,3,4,5]
 const result = findZalupa([1,2,3,4,5])
 console.log(result)*/

//7 задача
// коммент: Смотри примеры выше как сделать функцию и все будет гуд
// из функции надо вернуть строку, то есть внутри функции бежим по массиву циклом , 
//из каждого элмента формируем нужную нам строку и собираем в новый массив(может помочь map), а потом возвращаем массив из функции
 /*const peoples = [{name: 'Иван', age: 23}, {name: 'Vladik', age: 27}, {name: 'Kolya', age: 35}, {name: 'Tima', age: 38}];
const findPeoples = (peoples) => {
 for( let i = 0; i < peoples.length; i++)
 peoples.map( )

 return peoples


}
console.log(findPeoples)*/
//8 задача 
// коммент: попробовать решить самостоятельно и понять как что работает
// за основу можно взять решение которое уже есть ниже, просто чутка переделать для наглядности
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
// значение объекта помножились на 2, только тайтл ушел в NaN)
/*const menu = {
  width: 200,
  height: 300,
  title: "My menu"
}
const multiplyNumeric = (menu) => {
  for( const key in menu) {
    typeof menu[key] == 'number'
    menu[key] *= 2

  }

}
multiplyNumeric(menu)
console.log(menu)*/
//10 задача - пропускаю пока, сложно
//11 задача палиндром
// не понимаю, как расписать, разворот reverse сделал бы
// разобрался более менее, строку преобразовал в нижний регистр, чтобы сто пудово ее повернуть,
// сплитом преобразовал в массив строку, потом повернул реверсом и соединил результат джойном обратно в строку
// возврат строки сравнив ее с исходной, получил true, попробовал table поставить, получил false.
/*const checkPalindrome = (racecar) => {
 const str = racecar.toLowerCase()
  return str === str.split('').reverse().join('');
 
  
}

console.log(checkPalindrome('racecar'))*/
//12 задача fizzbuzz - непростая задача
/*const fizzbuzz = num => {
  for(let i = 1; i <= num; i++) {

  }

}*/
    