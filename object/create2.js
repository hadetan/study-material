//theres another way to use this method.

const obj2 = Object.create({});
Object.defineProperty(obj2, "book", {
    get: () => "blue book",
    //if enumerable is not defined as true here then it'll be by default false, and it wont give access to loop for iteration.
    enumerable: true
});

console.log(obj2.book);
console.log(Object.getPrototypeOf(obj2));

for( k in obj2){
    console.log(k)
}