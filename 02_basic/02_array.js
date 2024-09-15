const marvel = ["Ironman", "Spiderman", "Thor"]
const dc = ["Superman", "Batman", "Flash"]

// marvel.push(dc)
// console.log(marvel);
// console.log(marvel[3][2]);

// const Universe = marvel.concat(dc)
// console.log(Universe);

// const Universe = [...marvel, ...dc]
// console.log(Universe);

const array = [1,2,3,[4,5,6],7,[6,7,[5,3]]]

const newArray = array.flat(Infinity)
console.log(newArray);

console.log(Array.isArray("Akhil"))
console.log(Array.from("Akhil"));
console.log(Array.from({name : "Akhil"}));  // imp

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));
