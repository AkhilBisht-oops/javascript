// array
const myArr = [0,4,6,2,6]
const myHeros = ["Antman", "Dr strange", "Loki"]
const myArr2 = new Array(1,2,3,4)
console.log(myArr[1]);

// array methods
// myArr.push(10,4)
// myArr.pop();

// myArr.unshift(9);
// console.log(myArr);
// myArr.shift();
// console.log(myArr);

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(19) );

// const newArr = myArr.join()
// console.log(myArr);
// console.log(newArr);
// console.log(typeof newArr);

// slice, splice
console.log("A", myArr);

const myn1 = myArr.slice(1,3)

console.log(myn1);
console.log("B", myArr);

const myn2 = myArr.splice(1,3)
console.log(myn2);
console.log("C", myArr);
