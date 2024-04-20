// call apply bind



let user1 = {
    name:"sameer1",
    showName:function(){
        console.log(this.name);// sameer
    }
}

let user2 = {
    name:"sameer2",
    // showName:function(){
    //     console.log(this.name);// sameer
    // }
}

let user3 = {
    name:"sameer3",
    // showName:function(){
    //     console.log(this.name);// sameer
    // }
}


// user1.showName()
// user2.showName();
// user3.showName();

// call apply bind--dynamic scoping in js 

//call apply bind ---are use to invoc or call the function but with given context/given "this" 

// function payNow(){
//     console.log("paying now");
//     console.log(this)
// }

// payNow();
// payNow.call(user1)
// payNow.apply(user2)
// // i case of bind first you ahve to borrow loan of function/ later you have call it

// let takenFn = payNow.bind(user3);
// takenFn();


user1.showName();
// user1.showName.call(user2)
// user1.showName.apply(user3)

user1.showName.call(user2)
user1.showName.apply(user3)
//in bind 
let loanFn = user1.showName.bind(user2)
loanFn()




