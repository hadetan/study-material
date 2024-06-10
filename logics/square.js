const a = [1,2,3,4,5,6,7];

const b = a.map((element) => {
    return element * element;
});

// console.log(b);

const c = a.find((element) => element % 5 == 0);
// console.log(c);

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

const d = students.find((element) => {
    return element.marks < 50;
});

console.log(d);

const e = students.filter((element) => {
    return element.marks > 50;
});

// console.log(e);

const f = students.map((element) => {
    if(element.marks < 50) {
        element.isPassed = false
    } else {
        element.isPassed = true
    }
    return element
});

// console.log(f);