// Immediately Invoked Function Expressions (IIFE)
// IIFE is used to remove global scope pollution

(function chai(){
    console.log(`DB CONNECTED`);
})();

// () => first parenthesis indicate function defination
// () => second parenthesis indicate the execution call
// we use semicolon to end this code 
// bcz if we execution another iife this give error

( (name) => {
    console.log(`DB CONNECTTED TWO ${name}`);
})('akhil')