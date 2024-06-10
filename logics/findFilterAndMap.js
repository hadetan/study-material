const students = [
    {
        name: "a",
        marks: 20
    }, {
        name: "b",
        marks: 84
    }, {
        name: "c",
        marks: 39
    }, {
        name: "d",
        marks: 68
    }, {
        name: "e",
        marks: 90
    }, 
];

const a = students.find((element) => {
    return element.marks < 50;
});

console.log(a);

const b = students.filter((element) => {
    return element.marks < 50;
});

// console.log(b);

const c = students.map((element) => {
    if(element.marks < 50) {
        element.isPassed = false
    } else {
        element.isPassed = true
    }
    return element;
});

// console.log(c); 