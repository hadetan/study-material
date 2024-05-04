let names = [
    "hitesh",
    "anurag",
    "surya",
    "anirudh",
    "bipul"
]

//slice => it takes value from nth index to nth index. exp: print from 1 index to 5 index.
console.log(names.slice(1, 6));

//slice usage => if you want to select 4 and 5 number from the array (index => 3 -> 4), you cant print 5 by using the index 4 because it's not included, it's technically excluded from the method. in order to correctly use it you'll have to justify index 5 in order to achieve.
let num = new Array(1, 2 ,3, 4, 5);
console.log(num.slice(3, 5));