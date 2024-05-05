let array = [1,2,3,4,5,6,7,8,9];

function sum(arr){
    let sum = 0;
    for (let i = 0; i < arr.length; i++){
        sum = sum + arr[i];
    }
    return sum;
}

let results = sum(array);
console.log(results);

//we never use this next method.

function now(){
    let sum = 0;
    for(let i = 0; i < arguments.length; i++){
        sum = sum + arguments[i];
    }
    return sum;
}
console.log(now(10,20));