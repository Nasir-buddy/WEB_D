var bulb = document.querySelector(".circle");
var button = document.querySelector("button");
var text = document.querySelector("h3");
var flag = 0;
button.addEventListener("click", function () {
    if(flag == 0){
        bulb.style.backgroundColor = "Yellow";
        text.textContent = "Turn Off";
        flag = 1;
    } else {
        bulb.style.backgroundColor = "transparent";
        text.textContent = "Turn On";
        flag = 0;
    }

});