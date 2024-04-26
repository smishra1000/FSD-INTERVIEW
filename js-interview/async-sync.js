// console.log("1");;this is line takin 30 min
// console.log("2")
// console.log("3")

// synchronous---blocking

// 1234---
///1243--

// asynchnorous coding/non blocking

// console.log("1")
// setTimeout(function(){
//     console.log("2")
// },3000)
// console.log("3")

// javascript is single threaded main thread   []



// function getUser(){
//     setTimeout(()=>{
//         console.log("getting user")
//     },3000)
// }

// function displayUser(){
//     console.log("diplaying user")
// }

// function listenMusic(){
//     console.log("listening music")
// }

// getUser();
// displayUser();

// listenMusic();

// callback,promise,async await

// function placeOrder(){
//     setTimeout(function(){
//         console.log("hello placing order")
//     },2000)

// }

// function makePayment(){
//     console.log("payment started")
//     console.log("payment done")
// }



// placeOrder();
// makePayment();

//

// callback promise async await 
//callback----callback is a mechanism in which you pass function as a argument to another function---another function will make  a call after completion of process

// implement above example with callback 

// function placeOrder(cb){
//     setTimeout(function(){
//         console.log("hello placing order")
//         //after placing order now we can execute our callback which is cb
//         cb();
//     },2000)

// }

// function makePayment(){
//     console.log("payment started")
//     console.log("payment done")
// }

// placeOrder(makePayment)
// function getNotification(){
//     console.log("notification recieved")
// }

// getNotification();
// implement same example with promise---

// what is promise in javascript?


// let p1 = new Promise(function(resolve,reject){
// // when you execute your promise it basically has three state--pending,resolved,reject
// })

// p1().then(function(res){

// }).catch(function(err))


// function placeOrder(){
//     return new Promise(function(resolve,reject){
//         setTimeout(function(){
//             console.log("hello placing order")
//             reject("order has some issue not in stock")
//         },2000)
//     })

// }

// function makePayment(){
//     console.log("payment started")
//     console.log("payment done")
// }

// placeOrder().then(function(res){
//     makePayment();
// }).catch(function(err){
//     console.log(err)
// })


// function getNotification(){
//     console.log("notification recieved")
// }

// getNotification();

// what is purpose of fetch in javascript


// getAllUsers
// then call getUserById function to get specific user--ex-- id--1

// let users = []
// function getAllUsers(){
//     fetch("https://jsonplaceholder.typicode.com/users").then(function(res){
//         return res.json()
//     }).then(function(result){
//         console.log(result)
//         users=result
//         getUserById(users[0].id);
//     })

// }


// function getUserById(id){
//     // fetch("https://jsonplaceholder.typicode.com/users/"+id).then(function(res){
//     //     return res.json()
//     // }).then(function(result){
//     //     console.log(result)
//     // })
//     axios.get("https://jsonplaceholder.typicode.com/users/"+id).then(function(res){
//         console.log(res)
//     })
// }
// getAllUsers();
// console.log("hey please call now user by id after getAllUsers")


// exmaple using aysnc and await

// async function getAllPosts() {
//     let users = await fetch("https://jsonplaceholder.typicode.com/users")
//     let result = await users.json();
//     getPostById(result);

// }

// getAllPosts();

// async function getPostById(result){
//     let postById = await fetch("https://jsonplaceholder.typicode.com/users/" + result[0].id)
//     let finalResult = await postById.json()
//     console.log(finalResult)
// }




let person = {
    pname:"test",
    showName:()=>{
       // inside arraow function this will refer to window object
        //console.log(this.pname)
    },
    showName2:function(){
        //console.log(this.pname)
        const a = ()=>{
            console.log(this.pname)
        }
        a();
    }
}

person.showName();
person.showName2();

//inside arraow function they dont have their own "this" they are taking "this" from sorroundings env

const User = ()=>{
    console.log(this)
}

let u = new User()




