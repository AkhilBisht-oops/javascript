// const tinderUser = new Object()
const tinderUser ={}

tinderUser.id = "123abc"
tinderUser.name = "samay"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "samay@gmail.com",
    fullname: {
        userfullname: {
            firstname: "samay",
            lastname: "gabbar"
        }
    }
}

// console.log(regularUser.fullname.userfullname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj3 = {5: "e", 6: "f"}

// const obj4 = {obj1, obj2}
// const obj4 = Object.assign({}, obj1, obj2, obj3)
const obj4 = {...obj1, ...obj2, ...obj3} 
// console.log(obj4);

// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));

const course = {
    coursename: "js in hindi",
    price: "1299",
    courseInstructor: "Akhil"
}

course.courseInstructor
const {courseInstructor} = course
console.log(courseInstructor);
