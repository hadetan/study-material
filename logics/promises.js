function orderPizza () {
    return new Promise(function(res, rej) {
        setTimeout(() => {
            const pizza = "pizza";
            // res(pizza);
            rej("An error occured while ordering pizza")
        }, 2000);
    });
}

const pizzaPromise = orderPizza();

pizzaPromise.then((pizza) =>{
    console.log(`My ${pizza} has been delivered`)
}).catch(error => {
    console.log(error)
})