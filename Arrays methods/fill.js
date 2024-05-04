//fill => from nth index to nth index the value will be filled. it'll basically replace the nth index and fill it with the value you're assigning.
let arr = [1,2,3,4,5];
arr.fill([5, 6, 7], 4, 8);
console.log(arr);
//to fill multiple values in the same fill array method we use ["value"]
let arr1 = [1,2,3,4,5];
arr1.fill(["ani", "bin"], 4);
console.log(arr1);