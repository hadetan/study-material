//indexof => it's a method to know the specific value's index inside the array. exp: theres an array that has value of -> [1,2,3,4,5,6,7,8] and if we do console.log(indexOf(3)) then the outcome would be 2. it basically tells that value 3 is at index 2. if we have multiple values with the same value exp:[1,2,2,2,3] and if ask it for 2 inside the "indexOf" then it'll select the very first similiar value.

let num = [1,3,3,3,4,5,6,7,8,9];
console.log(num.indexOf(1));

//if the value is not present there then it'll throw -1 in the console.
console.log(num.indexOf(10));

//if you want to know a specific multiple values index then you can add second value in the method. if you want the first one then don't put any second value. if you want the second value then use ("value, 2"), and so on.
console.log(num.indexOf(3, 3));