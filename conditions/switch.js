let user = "mentor";

switch (user) {
    case "admin":
        console.log("send user to admin page");
        break;
        //break is needed to break the condition, else it will keep on reading the next conditions.
    case "mentor":
        console.log("send user to mentor page");
        break;
    default:
        console.log("send user to buying page");
        //default is like else in the ifelse condition.
}