var count = 0; 
var counter = document.querySelector(".counter");
var btn_inc = document.getElementById("increase");
var btn_dec = document.getElementById("decrease");
var btn_reset = document.getElementById("reset");
function inc(){
    btn_inc.addEventListener("click", function(){
        count++;
        document.querySelector(".counter").textContent = count;
    });
}
function dec(){
    btn_dec.addEventListener("click", function(){
        count--;
        console.log(count);
        document.querySelector(".counter").textContent = count;
    });
}
function reset(){
    btn_reset.addEventListener("click", function(){
        count = 0;
        document.querySelector(".counter").textContent = count;
        // clearInterval(count);
    });
}
inc();
dec();
reset();