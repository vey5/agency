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
 // вроде все правильно, но divisor is not defined, пока оставляю
 /*numbers = [1, 2, 3, 4, 5, 6]
 const findDivisibleBy = (numbers, divisor) => {
  const divisibleBy = numbers.filter(function(number) {
   const div = number % divisor  === 0
    return div
  })
  return divisibleBy
 }
 console.log(findDivisibleBy(numbers, divisor))*/
 //3 задача - посчитать нечетные числа ниже n 
 const oddCount = (n) => {
  const odd = (n-1) / 2
  return odd
 }
 console.log(oddCount(15))