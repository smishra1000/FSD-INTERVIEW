// prmise,callback,asysn await,let const var, string lieral,map reduce filter,class object,generators

//map function 
// map function  wikl iterate over on each element of array and return new arry after trnasformation or modification

// let arr = [10,20,30,40]

// let newArr = arr.map(function(element,index,arr){
//     console.log(element,index,arr)
//     return element*2
// })

// filter--

// let arr2 = [20,45,69,31,60,70,80]

// let filteredArr = arr2.filter(function(element,index,arr){
//     return element%2===0
// })

// console.log(filteredArr)


//reduced 



// using reduce function

// let names = ["sameer","sameer","test1","test2","tets3"]
// {
//     sameer:2,
//     test1:1,
//     test2:1
//     test3:1
// }

// let arr3 = [10,20,30,40]

// let sum = arr3.reduce(function(result,element,index,arr){
//     return result+element
// },0)
// console.log(sum)

// function showdata(){
//     return 
// }

// showdata();

function* showGen(){
    yield 1;
    yield 2;
    yield 3;
}

let v = showGen();

console.log(v.next())
console.log(v.next())
console.log(v.next())
console.log(v.next())





