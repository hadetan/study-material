//splice => to insert value inside array, the diffrence between push and splice is that in splice you can insert any value in the position you desire. in 0th index it'll be added in the starting position. the second value inside the declaration is to tell the length you want to select, and delete that value that is being selected. if I give value of 1 in the second index value it'll replace that selected array and replace it with the new value you're inserting. if you give 0 in the second index it'll not replace anything and sit in between of them. exp: "0, 0" (the first 0 is the index you want to insert, and the second 0 is to tell the length of it, and replace).
let fruit = ["apple", "banana", "orange"];
fruit.splice(0, 0, "blah");
console.log(fruit);