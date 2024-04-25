// using object literal
let emp = {
    name:"test1",
    email:"test1@gmail.com"
}

// Uinsg Object constructor function 

let o = new Object();
o.name="tets2"
o.age=50

// using constructor function 

function Person(name,age){
    this.name=name;
    this.age = age;

    //{}---this-- {name:tet10,age:50}
}

let p1 = new Person("test10",50)
console.log(p1);

let p2 = new Person("sameer",30)

console.log(p2)

// new keyword is use to cretae brand new object and it will retur from the function
// {} the newly created bject will point ----this---


//assignment
// Object.create------
// Object.assign---

// currying in javascript--

// function sum(a,b,c){
//     return a+b+c;
// }

// console.log(sum(10,20,30))

//// uisng currying ---basically you can create higher order function
// var x=80
// function sum(a){
//     return function(b){
//         return function(c){
//             return a+b+c+x
//         }
//     }
// }



// console.log(sum(10)(10)(10))

