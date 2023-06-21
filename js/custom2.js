//1. Function Definition
function getMyFullName(...args){ //Rest operator (...) is used inside function definition arguments.
    console.log(...args); //We can recive multipule parameter at the same time using rest operator(...)
}

//2. Function Calling //invoking
getMyFullName('Prabhat',"Singh",`27`,'5.6',["Mohan","Sohan"]);