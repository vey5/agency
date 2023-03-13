//1 задача - Написать объект ladder - объект, который позволяет подниматься вверх и спускаться.
const ladder = {
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
ladder.showStep()//1
 