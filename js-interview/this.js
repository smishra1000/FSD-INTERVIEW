// rule about this this in js
// this----current context in which you function

// var my_name="sameer"

// console.log(my_name)
// console.log(window.my_name)
// console.log(this.my_name)


// function sayHi(){
//     console.log("saying hiii")
// }


// sayHi();
// this.sayHi();
// window.sayHi();

//1. at global level this belongs window



// 2. inside object if you define any method then this----will point to the object itself.
// if insde method another function then this point to ---window object.

// let user = {
//     name:"testuser",
//     showName:function(){
//         console.log(this.name);//

//         function sayHello(){
//             console.log(this)
//         }
//         sayHello();
//     }
// }

// user.showName();



//3 inside arrow function this will belongs to surronding context of lexical 
// let user2={
//     name:"testuser2",
//     showNormal:function(){
//         console.log(this);//user2 object
//         const a = ()=>{
//             console.log(this);//user2
//         }
//         a();
//     },
//     showName2:()=>{
//         console.log(this);// window object
//     }
// }

// user2.showName2();
// user2.showNormal();


// var msg = "hiiii"
// function greet(){
//     var msg="hello"
//     console.log(msg)
//     console.log(this)
//     console.log(this.msg)
// }

// greet();



// simple rule for get this in js 
// 

// function sayNo(){
// console.log("noooo")
// console.log(this);//window
// }

// sayNo();

// let emp = {
//     name:"testemp",
//     salary:2000,
//     showSal:function(){
//         console.log(this);// this emp
//         function inner(){
//             console.log("inner",this); //this
//         }
//         inner()
//     },
//     showName:()=>{
//         console.log(this);// window
//     }
// }

// emp.showSal();
// emp.showName();



