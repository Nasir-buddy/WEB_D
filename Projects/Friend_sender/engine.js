var req = document.querySelector("h3");
var addbutton = document.querySelector("#add");

var removebutton = document.querySelector("#remove");
var flag = 0;
addbutton.addEventListener('click',()=>{
    if(flag == 0){
        req.innerHTML = "Request sent";
        req.style.color = "green";
        addbutton.innerHTML = "Remove Friend";
        flag = 1;
    } else {
        req.innerHTML = "Add Friend";
        req.style.color = "red";
        addbutton.innerHTML = "Add Friend";
        flag = 0;
    }
});
