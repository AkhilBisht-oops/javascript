// primitive 

// 7 ypes of primitive : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let useEmail    // undefined 

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId)     // false


const bigNumber = 344657678958930n


// refernce tupe(non-primitive)

// Array, Objects,Functions
// in non-primitive data type gives function in a return type except function 
// function datatype gives function-object return type

const heros = ["Iron Man" , "Thor", "Deadpool"];
let myObj = {
    name: "Akhil",
    age: 20,
}

const  myFunction = function(){
    console.log("Hello Github user");
}

console.log(typeof myFunction);

// ************************************************************************

// all primitive datatype are stored in a stack
// pass by value
// value is copy if we change in one it doesn't change the another 
let myCodeforce = "bishtakhil303dotcom"

let anotherename = myCodeforce
anotherename = "bishtakhil303"

console.log(myCodeforce);
console.log(anotherename);


// all non-primitive datatype stored in a heap
// pass by reference 
// value is real if we change in one it also change anothere  
let userOne = {
    email: "userOne@google.com",
    upi: "useronesbi"
}

let userTwo = userOne
userTwo.email = "userTwo@google.com"

console.log(userOne.email);
console.log(userTwo.email);
