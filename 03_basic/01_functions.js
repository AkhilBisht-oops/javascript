function sayMyName(){
    console.log("A");
    console.log("K");
    console.log("H");
    console.log("I");
    console.log("L");
}

// sayMyName()

// function addTwoNumber(number1, number2){
//     console.log(number1 + number2);
// }


function addTwoNumber(number1, number2){
    // let result = number1 + number2
    // return result

    return number1 + number2
}

// addTwoNumber(3, 5)
// addTwoNumber(3, "7")
// addTwoNumber(3, "a")
// addTwoNumber(3, null) 

const result =  addTwoNumber(3, 5)

// console.log("Result: ", result);

function loginUserMessage(username = "sam"){
    if(username === undefined){
        console.log("please enter the username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("akhil"))
// console.log(loginUserMessage())

function calculateCartPrice(val1, val2, ...num1){
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000));

const user = {
    username: "akhil",
    price: 234
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
    
}

// handleObject(user)
handleObject({
    username: "akku",
    price: 499
})

const myNewArray = [200,500,600,100]

function returnSecondValue(getArray){
    return getArray[2]
}

console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([6000,200,300,10000]));
