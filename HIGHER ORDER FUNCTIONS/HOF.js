//HOF => Higher Order Function are functions which take other function as a parameter or return a function as a value. The function passed as a parameter is called callback.
//callback => function is being calling a function

//rough example
function a(){
    console.log("I was called by another function");
}

function b(){
    //calling back another function
    a();
}

b();

//mini program
const callback = (n) => {
    return n * 2;
};

function cube(callback, n){
    return callback(n) * n
}

console.log(cube(callback, 2));

/*
types of callbacks =>
forEach
map
filter
reduce
find
every
some
sort
*/

//map
const numbers = [1,2,3,4,5,6];
const numsq = numbers.map((num) => {
    num = num * num;
    return num;
});
console.log(numsq);

//filter
const country = [
    "india",
    "canada",
    "ireland",
    "japan",
    "kenya",
    "finland"
]
const count = country.filter((val) => {
    val = val.includes("land")
    return val
});
console.log(count);

//reduce => reduces the lenght of an array.
//reduce takes a callback function. the call back function takes accumulator, current, and optional initial value as a parameter and returns a single value. it is a good practice to define an initial value for the accumulator value. if we do not specify this parameter, by default accumulator will get array first value. if our array is an emoty array, then javascript will throw an error.
const sum = numbers.reduce((accumulator, current) => accumulator + current, 0);
console.log(sum);

//destructuring => it destructers the array and assign the value to the new variable in the index method. ex: pi holds the value of index 1, means "3.14".
const sci = [2.72, 3.14, 9.81, 37, 100];
let [e, pi, gravity, bodytemp, boiltemp] = sci;

console.log("destructure: ", e, pi, gravity, bodytemp, boiltemp);

//skip
const arr1 = [1,2,3];
let [var1, , var2] = arr1;
console.log("skip: ",var1, var2);

//rest => it saperates the array into two with giving the value you want to pick and give you as non-array value. rest will be given in array.
const arr2 = [1,2,3,4,5,6,7,8,9];
let [num1, num2, ...rest] = arr2;
console.log("picked value: ", num1, num2);
console.log("rest value: ", rest);

//spread => suppose we have an array of data, and want to pass it to a function, thats where spread comes. spread "spreads" the data into small chunks and sends to the function to perform an action.
function sumone(x, y){
    return x + y
}
let var3 = [9, 4];
console.log("spread: ", sumone(...var3))

//rest => in production level, you wont know specifically how many data will a user send thats why rest operator is useful. you wont have to specify var names like "x, y" etc. its an automation.
let nums = [1,2,3,4,5,6,7,8,9];

function sum3(...args){
    console.log("value of args is: ", args);
    let sum = 0;
    for(const x of args){
        sum = sum + x;
    }
    return sum;
}
console.log(sum3(...nums))

//rest and spread usage is similiar, we use tripple dot "...", but depending on how youre using it defines weather its a rest or spread. spread is used to break an array, and rest is used to make it an array.


//eventloop => suppose we are using a setTimeOut function and set 3s timer, this function will go to the queue memory and after the timer is out it'll go to stack memory and execute.


//async await function
const userone = () => {
    return "userone"
};
const usertwo = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("credential correct");
        }, 3000)
    });
};
const userthree = () => {
    return "userthree"
};
let users = async () => {
    let val1 = userone();
    console.log(val1);

    let val2 = await usertwo();
    console.log(val2);

    let val3 = userthree();
    console.log(val3);
}
users();