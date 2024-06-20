console.log('before the code');

function getCheese() {
    console.log('inside getCheese function');
    return new Promise((res, rej) => {
        setTimeout(() => {
            res('cheese');
        }, 1000);
    });
}

function getDough() {
    console.log('inside getDough function');
    return new Promise((res, rej) => {
        setTimeout(() => {
            res(`dough`);
        }, 2000);
    });
}

function getPizza() {
    console.log('inside getPizza function');
    return new Promise((res, rej) => {
        setTimeout(() => {
            res(`pizza`);
        }, 2000);
    });
}

async function orderPizza() {
    console.log('inside orderPizza function');
    const cheese = await getCheese();
    const dough = await getDough(cheese);
    const pizza = await getPizza(dough);

    console.log(`Now we have ${cheese}, ${dough} and ${pizza}`);
    return `here is your ${pizza}`;
}

orderPizza().then((pizza) => {
    console.log(pizza);
});

console.log('after the code');

setTimeout(function () {
    console.log('hey');
}, 2000);

setInterval(() => {
    console.log('interval');
}, 2000);

function callback(text) {
    console.log(text);
}

function caller() {
    callback('hey');
}
