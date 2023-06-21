//Array is Denoted by [].
//In array we can store more than one value.
//Eg:-
//Store all student name in one variable.
var students = ["Raju","Shyam","Rohan","Sohan","Mohan"]; //Alway create variable in plural form. //Information store in array is called elements.

let friends = ['A',"B",`C`,"D","E"]; // [] is an array. //We Move from left to right.
const cities = []; // [] is an array. //first element of array is store at 0 index.
const states = []; 

//Array can Store Multiple Data Types. & There is no limit to store element in array.
var x = ['Prabhat',"5.6",`27`,"True",{address:'NDLS'},["Raju",'Shyam']]
console.log('-> ' + x[0]);
console.log('-> ' + x[1]);
console.log('-> ' + x[2]);
console.log('-> ' + x[3]);
console.log('-> ' + x[4].address); // . is a member selection operator.
console.log('-> ' + x[5][0]);
console.log('-> ' + x[5][1]);


console.log(students[0]);
console.log(students[1]);
console.log(students[2]);
console.log(friends[0]+` `+friends[1]+" "+friends[2]+' '+friends[3]+" "+friends[4])
