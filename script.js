var isFriend=document.querySelector("h5")
var addFds=document.querySelector("#add")
var flag=0
addFds.addEventListener("click",function(){
    if(flag === 0){

        isFriend.style.color="green"
        isFriend.innerHTML="Friends🫱"
        flag=1
    }else{
        isFriend.innerHTML="Stranger😒"
        isFriend.style.color="red"
        flag=0
    }
})


// this is when we want to use remove button 

// var remFds=document.querySelector("#remove")
// remFds.addEventListener("click", function () {
//     isFriend.innerHTML = "Not Friends😒"; 
//     isFriend.style.color="red"
// })