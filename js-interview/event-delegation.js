let div = document.getElementById("parent")
let button = document.getElementById("child")

// attach event

div.addEventListener("click",function(e){
    console.log("div clicked:parent",e)
},{capture:false})

button.addEventListener("click",function(e){
    console.log("button clicked:child",e)
    e.stopPropagation();
},{capture:false})

document.body.addEventListener("click",function(e){
    console.log("body clicked:body",e)
},{capture:false})


// event delegation---event bubbling event capturing  target 


// by default in your event delgation model----bubbling will happen;capture is false;;
// event delgation= buubling+capturing+target

