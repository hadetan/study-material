function getCheese() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res("🧀");
        }, 1000);
    });
}

function getDough(cheese) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res(`${cheese} 🫓`);
        }, 2000);
    });
}

function getPizza(dough) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res(`${dough} 🍕`);
        }, 2000);
    });
}

async function orderPizza() {
    const cheese = await getCheese();
    const dough = await getDough(cheese);
    const pizza = await getPizza(dough);

    return `Here is your ${pizza}`;
}

orderPizza().then((pizza) => {
    console.log(pizza);
})