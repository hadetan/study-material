// const PI = Math.PI;
// console.log(PI);

// //to get the round figure of the number
// console.log(Math.round(PI));

// //floor is like a bottom round figure
// console.log(Math.floor(5.5));

// //ceil is like a top round figure
// console.log(Math.ceil(5.5));

// //min is a method to get the least minimum number from an array
// console.log(Math.min(20, 5, 2, 1));

// //max is a method to get the atmost maximum number from an array
// console.log(Math.max(20, 5, 2, 1));

// //random method is used to pick a random number to n number
// console.log(Math.random() * 7);

//to make random method useful we can use it like this ->
let num = (Math.round(Math.random() * 6));

if (num === 0){
    num = num + 1;
    console.log(num);
} else{
    console.log(num)
}

//pow is a method to multiply x number for y times
console.log(Math.pow(3, 3));

//log mathod stands for logarithm
console.log(Math.log(10));

//the next method is used to calculate sin
console.log(Math.sin(90));