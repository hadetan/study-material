let userName = {
    name: "aquib",
    lastName: "ali"
}

for (const x in userName) {
    console.log(userName[x]);
    //the x in the [] specifies the value of the object. without using it it'll throw the key (or index).
}