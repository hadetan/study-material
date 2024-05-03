let arr = [
    {name: "a", age: 21, gender: "male"},
    {name: "b", age: 2, gender: "male"},
    {name: "c", age: 41, gender: "female"},
    {name: "d", age: 11, gender: "male"},
    {name: "e", age: 13, gender: "female"},
    {name: "f", age: 25, gender: "male"}
]

// filter works just like foreach loop but we can return the value in a new variable using filter.

let arr2 = arr.filter(function (val) {
    return val.age > 12;
});