// "use strict"
// n=9;
// console.log(n)
// 1 what are various data types in js 
// ans--primptive-- String Number Boolean Undefined Null Symbol
        // Non primptive Object

var a;
console.log(a);// undefined

//var x = null;

var name="sameer"

let x = Symbol("hello")
let y = Symbol("hello")
console.log(x===y)
let id = Symbol("name")
let id2 = Symbol("name")

let user = {
    age:20,
    [id]:"sameer",
    [id2]:"test"
}

for(let key in user){
    console.log(user[id],user[id2])
}

// 2 what is diffenerence between undeifned and null--- refer above

//3>what is clousre ? 
// ans--

function parent(){
    let parentname="test"
    return function child(){
        console.log(parentname)
    }
}




// let r = parent();
// console.log(r())


// 4 what is hoisting?
// ans-- 
//var a =undefined
// console.log(a)
// var a=10;
// console.log(a)
// function show(){
//     console.log("hi show")
// }

// show();
// function show(){
//     console.log("hi show")
// }

//let z// tdz area
// console.log(z)
// const z = 50;
// console.log(z)

//show1();
// function show1(){
//     // function show2(){
//     //     console.log("show2")
//     // }
//     console.log("show1")
//     show2()
//     function show2(){
//         console.log("show2")
//     }
// }

// m=8
// console.log(m)

// function showStrict(){
//     "use strict"
//     var m=8;
//     console.log(m)
// }

// showStrict();




// 6 what is constructor function,this call apply bind;
 // object literal , Object() , constructor function, Object.create, object.assign()

//  let emp = {
//     name:"sameer",
//     email:"test1@gmail.com"
//  }

// let u1 = new Object();
// console.log(u1)
// u1.salary=10000
// console.log(u1)

// using constructor function 

// let u1 = {
//     name:"test1"
// }
// let u2 = {
//     name:"test2"
// }

// let u3={
//     name:"test3"
// }

// function User(name){
//     this.name=name
// }

// let u1 =  User("test1")

// let u2 =  User("test2")

// let u3 =  User("test3")


// console.log(u1,u2,u3)


function Greet(){
    this.msg="hiii good morning"
}

let result = Greet();
console.log(result);// it will return empty {} object when you call with new keyword







