var toggled = false;

var hTag = document.getElementsByTagName("h1")[0];
var bodyTag = document.getElementsByTagName("body")[0];
var circle = document.getElementById("circle");

document.getElementById("toggle").onclick = function(){
    if(!toggled){
        hTag.classList.add("color-white");
        bodyTag.classList.add("bck-color-black");
        circle.style.marginLeft = "160.5px"
        toggled = true;
    } else {
        hTag.classList.remove("color-white");
        bodyTag.classList.remove("bck-color-black");
        circle.style.margin = "1px";

        toggled = false;
    }
}