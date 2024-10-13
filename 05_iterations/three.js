//  forof 

// syntax;
// for (const element of object) {
    
// }

// ["", "", ""]
// [{}, {}, {}]

const arr = [1,3,4,8,6,7]

for (const num of arr) {
    console.log(num);
}

const greetings = "Hello World!"
for (const great of greetings) {
    console.log(`Each char is ${greet}`);
}

// maps

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

// console.log(map);

for (const [key, value] of map) {
    console.log(key, ':-', value);
}

const myObject = {
    game1 : 'NFS',
    game2 : 'Spiderman'
}

// forof loop not working in Object
// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
// }