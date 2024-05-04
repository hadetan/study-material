//forOf => this loop will copy the array into a consistant variable and take values from array one after another and execute whatever logic is written inside the loop.


//this loop is created especially for arrays.


let fruit = ["apple", "banana", "coconut"];

//the new uppercased value will save here.
let capfruit = [];

//to count how many times the loop has been executed.
let i = 0;

for (const c of fruit){
    capfruit.push(c.toUpperCase());
    //the loop has executed for 3 times.
    i++
}
//uppercased outcome.
console.log(capfruit);
//loop execution count.
console.log(i);

