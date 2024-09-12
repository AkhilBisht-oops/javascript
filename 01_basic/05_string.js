const name = "Akhil"
const repoCount = 50

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('cocaine-dedo-cole')

// console.log(gameName[0]);
// console.log(gameName.__proto__);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(3));
// console.log(gameName.indexOf('i')); 

const newString = gameName.substring(0,5)
console.log(newString);

const anotherString = gameName.slice(-11,5);
console.log(anotherString);

const newStringOne = "   Akhil"
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://akhil.com/akhil%20bisht"
console.log(url.replace('%20', '-'));

console.log(url.includes('beast'));

console.log(gameName.split('-'));
