const a = [1, 2, 3, 4, 5, 6, 7];

//manually
function filterNumber(conditionFunction) {
    const b = [];

    for (let i = 0; i < a.length; i++) {
        if (conditionFunction(a[i])) {
            b.push(a[i])
        }
    }
    return b;
}

function isOdd(num) {
    return num % 2 != 0;
}

const evenNumber = filterNumber(isOdd);

console.log(evenNumber);

//using filter
const b = a.filter((element) => {
    return element % 2 != 0;
})

console.log(b);