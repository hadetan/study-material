//try and catch

//syntax

try{
    console.log("try and error without finally", aki);
} catch(err){
    console.log(err.name);
    console.log(err.message);
}

let names = "aki";
try{
    console.log( names);
} catch(err){
    console.log(err.name);
    console.log(err.message);
}finally{
    console.log("Finally: no matter what i will be executed");
}

// diffrent type of errors
/*
refrence error
syntax error
typeError
*/

