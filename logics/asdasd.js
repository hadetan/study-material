const a = [1, 2, 3, 4, 5, 6, 7];

const b = a.find((element) => {
    return element % 2 == 0;
});

console.log(b);