//this => this keyword is used to specify that find this key inside the object im using. 

const obj = {
    comics: "marvel",
    pen: "",
    printComic: function(){
        //here this is telling the function to search inside this object.
        this.pen += "ball pen"
        console.log(this)
        //return this is a way to pass the value to the next chain
        return this;
    },
    //in arrowed function you can't use "this" keyword inside it.
    // printaComic: () => {
    //     //this keyword does'nt have any access to the context.
    //     console.log(this)
    // }
}
//chaining
console.log(obj.printComic().printComic().printComic())
// console.log(obj.printaComic())