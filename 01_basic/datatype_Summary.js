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

const heros = ["Iron Man" , "Thor", "Deadpool"];
let myObj = {
    name: "Akhil",
    age: 20,
}

const  myFunction = function(){
    console.log("Hello Github user");
}

console.log(typeof myFunction);
