//1 задача (в цикле показывает все возраста)
// Коммент: тут надо еще вывести если более 30 лет, то дед
  /*for (let i = 0; i < 101; i++) {
      if (i > 0 && i <= 17)   {
        console.log('ребенок')
        }
       if ( i > 17 && i <= 30) {
       console.log('молодой')
      }
      if (i > 30 && i <= 55) {
       console.log('зрелый')
      }
      if (i > 55 && i <= 101) {
       console.log('дед')
      }
		}*/
// тут разобрался
  
  
//2 задача
// Коммент: тут у тебя есть ошибка. Ты передаешь в функцию массив в аргумент element
// И потом весь массив element проверяешь element % 2 !== 0
// А нужно пройтись по каждому элементу массива циклом (например forEach) и проверить на каждом элементе четный он или нет
// Если хотя бы один элемент в массиве окажется четным, тогда возвращаем true из функции, в противном случае false

 /*const arrow = (arr) => {
    const result = []
    const score = arr.forEach(function(elem)  {
         
        if (elem % 2 === 0) {
           
        }
          else if (elem % 2 !== 0) {
            
          }
          return result
          
        })
        return score
 }
   const arr = [1, 2, 3, 4, 5,];
   

console.log(arrow(arr))*/
  
//3 задача
// Коммент: здесь все то же самое как в пред задаче в плане цикла
// const arrow = (element) => {
 
//     if (element % 2 === 0) {
//         return true;
//     } else {
//         return false;
//     }
// }
// const arr = [1, 2, 3, 4, 5,];
// const result = arrow([1, 2, 3, 4, 5,])

// console.log(result)

//4 задача
// Коммент: задача почти такая же как 3, мы идем циклом по массиву и проверяем кратно ли число 5, если проверка даст true
// То собираем такие элементы в массив результатов внутри функции и в конце возвращаем этот массив функции
// Соответственно при вызове у нас вернется либо массив с кратными числами, либо пустой массив, если ничего не нашлось в массиве, который мы передали в аргумент при вызове

//5 задача
// Коммент: тут все норм
// const findNumba = (gvozd) => {
//   const her =  gvozd.reduce((sum, current) => sum + current)/gvozd.length.toFixed(1);
//   return her
    
// }
// gvozd = [1,2,3,4,5]
// const result = findNumba([1 ,2 ,3 ,4 ,5])
// console.log(result)


//6 задача
// Коммент: тут все норм

//  const findZumba = (dew) => {

//     dew.push(1); dew.splice (0, 1)
 
//  return dew
//  }

//  console.log(findZumba([1, 2, 3, 4, 5]))
//   dew = [1,2,3,4,5];
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
// Коммент: Тут нема решения, в консоль лог вовзращается само тело функции вместо ее результата
// Внутри самой функции тоже не совсем то что надо
// Я предлагаю пройтись по массиву из аргумента мапом и внутри мапа обработать каждый элемент, так чтобы он превратился из объекта в строку

  /*const peoples = [{name: 'Иван', age: 23}, {name: 'Vladik', age: 27}, {name: 'Kolya', age: 35}, {name: 'Tima', age: 38}];
   const findPeoples = (peoples) => {
     const newPeople = peoples.map(function(item) {
       const result = `name: ${item.name}, age: ${item.age}`
         //const result = item.name + item.age
      return result
    })
    return newPeople
   }
  console.log(findPeoples(peoples))*/
   // Здесь таки все понял наконец-то, func стрелка, в теле взял параметр из массива, добавил к нему
   //map, записал в новую переменную результат выполнения коллбэк func, затем
   //преобразовал итемы массива в строку, записал все в новую переменную, чтобы return
   // вернул результат в нее и в конце сделал return из самой func,
   // ну и вызвал func в консоли

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
// все работает, ток fizzBuzz вместо 3 и 5 не идет, а как в примере работает, на 15 числах fizzBuzz идет
  /*const fizzBuzz = (num) => {
    for(let i = 1; i <= num; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
        console.log('fizzBuzz')
      }
      else if (i % 3 === 0) {
        console.log('fizz')
       }
      else if (i % 5 === 0) {
          console.log('Buzz')
        } else {
          console.log(i)
        }
      }
    }
        fizzBuzz(15);*/
        //Неудачная попытка
        /*const fizzBuzz = (num) => {
          let result = '';
          for (let i = 1; i <= num; i++) {

            if ( num % 3 == 0 ) {
                result += 'fizz';
            }
            if ( num % 5 == 0 ) {
                result += 'buzz';
            }
          }
          return result || num
        }
        console.log(fizzBuzz(10))*/


//13 задача - анаграмма, сложная задача, пропустил
// такое вот решение, без объекта и циклов, выглядит проще
/*const anagramm = (str1, str2) =>  {
 const str1Strik = str1.replace(/[^\w\s]|_/g, "").toLowerCase().split('').sort().join('')
 const str2Strik = str2.replace(/[^\w\s]|_/g, "").toLowerCase().split('').sort().join('')
// реплейс убираются спец символы, преобразуется все в нижний регистр, разбив букв в массив, обычная сортировка
// и все обратно соединяется джойном
 return str1Strik === str2Strik // а тут сравниваются две строки
}
 console.log(anagramm('finder', 'friend')) // и если это анаграмма, то true
 console.log(anagramm('hello', 'bye')) // соо-но если нет, то false*/
 
//14 задача - поиск гласных
/*const findVowels = (str) => {
  let count = 0
 const vowels = ['a', 'e', 'i', 'o', 'u']
 for(let char of str.toLowerCase()) {//проход циклом по массиву и преобразование в нижний регистр
   if (vowels.includes(char)) {// методом инклюдс поиск нужного элемента, т.е гласной, если она есть в массиве,
    // то будет true
     count+= 1
   }
 }
  return count
}

console.log(findVowels('hello'))
console.log(findVowels('why'))*/
//
//15 задача - фибоначчи, сложная задача достаточно
/*const fibonacci = (num) => {
  const fib = []
  for (let i = 0; i < num; i++) {
     if (i === 0) fib[i] = 1
     else if (i === 1) fib[i] = 2
     else fib[i] = fib[i-2] + fib[i-1]
     }
     return fib
}
console.log(fibonacci(10))
//крч такое вот решение есть, по идее можно еще как-то решить, но тут я хз уже*/