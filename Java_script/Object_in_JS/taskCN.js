var timer = 10;
console.log("Countdown.");
function countdown(){
    console.log(timer, "Second");
    timer--;
    if(timer == 0){
        console.log("Time Up!");
        clearInterval(id);
    }
}

// setInterval(countdown , 1000);
var id = setInterval(countdown, 1000);