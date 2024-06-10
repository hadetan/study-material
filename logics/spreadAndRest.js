// using array

//In parameters it will convert it into array
//spread
// function greet(...a) {
//     a.map((element) => {
//         console.log(`hello ${element}`);
//     });
// }

// const arr = ["anuj", "bhanuj", "chanuj"];

// //While passing it will destructure it
// //rest
// greet(...arr);

// using object

const animal = {
    name: "Simba",
    age: 16
};

const information = {
    //Destructuring the object.
    ...animal,
    address: "Mountan",
    legs: 4
};

// console.log(information);

function greet2(animal) {
    console.log(`hello ${animal.name}`);
}

greet2(information);
