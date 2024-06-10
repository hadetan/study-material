const orderPizza = (callback) => {
    //2
    console.log("inside the orderPizza function");

    setTimeout(() => {
        //5
        console.log("inside of the setTimeOut function");
        const pizza = "Pizza";
        callback(pizza);
        //9
        console.log("setTimeOut function executed now!");
    }, 2000);
    //3
    console.log("outside of the setTimeOut function");
}
//1
console.log("outside of the orderPizza function");

orderPizza((pizza) => {
    //6
    console.log("inside the callback function");
    //7
    console.log("here is my", pizza);
    //8
    console.log("all tasks completed");
});
//4
console.log("outside of the callback function");