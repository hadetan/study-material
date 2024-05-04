let names = [
    "hitesh",
    "anurag",
    "surya",
    "anirudh",
    "bipul"
]
console.log(names);
console.log(names.length); //length of arrays.

console.log(names[3]);
console.log(names[names.length - 1]);

//another way to create an array, although this is not recommended.
let namess = new Array("name 1", "name 2");
console.log(namess);

//to put something in an array there multiple ways.

//push => insert value inside array at the end.
names.push("vinod");
console.log(names);

//slice => it takes value from nth index to nth index. exp: print from 1 index to 5 index.
console.log(names.slice(1, 6));

//slice usage => if you want to select 4 and 5 number from the array (index => 3 -> 4), you cant print 5 by using the index 4 because it's not included, it's technically excluded from the method. in order to correctly use it you'll have to justify index 5 in order to achieve.
let num = new Array(1, 2 ,3, 4, 5);
console.log(num.slice(3, 5));

//splice => to insert value inside array, the diffrence between push and splice is that in splice you can insert any value in the position you desire. in 0th index it'll be added in the starting position. the second value inside the declaration is to tell the length you want to select, and delete that value that is being selected. if I give value of 1 in the second index value it'll replace that selected array and replace it with the new value you're inserting. if you give 0 in the second index it'll not replace anything and sit in between of them. exp: "0, 0" (the first 0 is the index you want to insert, and the second 0 is to tell the length of it, and replace).
let fruit = ["apple", "banana", "orange"];
fruit.splice(0, 0, "blah");
console.log(fruit);

//concatenation => to connect multiple arrays into one array.
let arr1 = [1, 2 ,3 ,4];
let arr2 = [5, 6, 7, 8];
let arr3 = [9, 10, 11, 12];

console.log(arr1.concat(arr2));
console.log(arr1.concat(arr2, arr3));

