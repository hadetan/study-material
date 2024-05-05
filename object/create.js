//object.create => this method is used to re-use an existing object. this method is used very rarely.

const powers = {
    fly: true,
    cordinate: Math.random() + 1
}

const obj = Object.create(powers);
//if you only use the var name it will show you the empty object
console.log(obj);

//but if you use the key of that copied object it'll give you the key.
console.log(obj.cordinate);

console.log(Object.getPrototypeOf(obj));