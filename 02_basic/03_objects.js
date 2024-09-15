// singleton

// object literals

const mySym = Symbol("Key1")


const JsUser = {
    name: "Akhil",
    "full name": "Akhil Bisht",
    age: 20,
    [mySym] : "Key1",
    email: "beast@google.com",
    location: "delhi",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Friday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser.mySym);
// console.log(typeof JsUser.mySum);
// console.log(JsUser[mySym]);
// console.log(typeof JsUser[mySym]);


JsUser.email ="akhil@google.com"
// console.log(JsUser);

// Object.freeze(JsUser)
// JsUser.email = "akhil@yahoo.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello Js User");
}
JsUser.greating2 = function(){
    console.log(`hello js user, ${this.age}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greating2());
