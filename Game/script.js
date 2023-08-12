var timer = 4;
var score = 0;
var hitrn = 0;
function makeBubble() {
    var store = "";
    for (var i = 0; i <= 149; i++) {
        random = Math.floor(Math.random() * 10);
        store += `<div class="circle">${random}</div>`;
    }
    document.querySelector(".pannel-bottom").innerHTML = store;
}
function runtimer() {
    var clock = setInterval(function () {
        if (timer > 0) {
            timer--;
            document.querySelector("#time").textContent = timer;
        } else {
            clearInterval(clock);
            document.querySelector(".pannel-bottom").innerHTML = `<h1>Game Over</h1>`;
        }
    }, 1000);
}
function hitter() {
    hitrn = Math.floor(Math.random() * 10);
    document.querySelector("#changenumber").textContent = hitrn;
}
function incScore() {
    score += 10;
    document.querySelector("#score").textContent = score;
}
document.querySelector(".pannel-bottom").addEventListener("click", function (details) {
    var clickednumber = (Number(details.target.textContent));
    if(clickednumber === hitrn){
        incScore();
        makeBubble();
        hitter();
    }
});
makeBubble();
runtimer();
hitter();
