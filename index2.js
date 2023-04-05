//1 задача - Написать объект ladder - объект, который позволяет подниматься вверх и спускаться.
/*const ladder = {
    step: 0,
    up ()  {
        console.log(this.step)
        this.step++
        return this.step
        // используется постфиксная форма сложения, когда возвращает старое значение
    },
    showStep ()  {
        console.log(this.step)
        return this
    },
    down ()  {
        console.log(this.step)
        this.step--
        return this
    },
};
ladder.up()//0
ladder.up()//1
ladder.showStep()//2
ladder.down()//2
ladder.showStep()//1*/
 //2 задача - найти числа, которые делятся на заданное число
 // разобрался с решением, возращает массив с нужными значениями
 /*numbers = ([1, 2, 3, 4, 5, 6])
 const findDivisibleBy = (numbers, divisor) => {
  const divisibleBy = numbers.filter(function(number) {
   const div = number % divisor  === 0
    return div
  })
  return divisibleBy
 }
 console.log(findDivisibleBy([1, 2, 3, 4, 5, 6], 2))*/
 //3 задача - Подсчитать, сколько лет назад отец был вдвое старше сына (или через сколько лет он будет вдвое старше).
 // через метом math.abs - модуль числа, возвращает из отрицательного числа в положительное
 /*const twiceAsOld = (dadYearsOld, sonYearsOld) => {
    const twice = Math.abs(sonYearsOld * 2 - dadYearsOld)
    return twice
 }
 console.log(twiceAsOld(36, 7))*/
 //4 задача - посчитать нечетные числа ниже n 
 // нечетное число выводится, не выводятся только до заданного числа нечетные
 /*const oddCount = (n) => {
  const odd = Math.round((n / 2) - 1)
  return odd
 }
 console.log(oddCount(15))
 console.log(oddCount(7))*/
 // 5 задача - преобразовать строку в число
 // функцией number(value) преобразовал к числу строку
 /*const stringToNumber = (str) => {
    const num = Number(str)
    return num
 }
 console.log(stringToNumber('1234'))
 console.log(stringToNumber('605'))
 console.log(stringToNumber('405'))
 console.log(stringToNumber('-7'))*/
 
