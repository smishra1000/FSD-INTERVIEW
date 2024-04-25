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



function getUser(){
    setTimeout(()=>{
        console.log("getting user")
    },3000)


   
}

function displayUser(){
    console.log("diplaying user")
}

function listenMusic(){
    console.log("listening music")
}

getUser();
displayUser();

listenMusic();

// callback,promise,async await
