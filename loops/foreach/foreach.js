//for each
//foreach() is HOF, and inside HOF the "() => {}" is callback
const arr = ["hey", "hi", "hello", "hola"]
arr.forEach(myfunc);
function myfunc(val){
    val = val + "1";
    console.log(val);
}

//foreach with callback
//callback are always written in arrow function
arr.forEach((val) => {
    console.log(val);
});