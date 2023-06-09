var cur = "square";

var shape = ["square", "rectangle", "circle", 
"oval", "triangle-up", "triangle-down", 
"triangle-topleft","triangle-topright", "triangle-bottomleft",
"triangle-bottomright", "triangle-right"];

var color = ["red" , "orange", "green", "maroon", "pink", "voilet"];

document.getElementById("shape").onclick = function(){
    var random = shape[Math.floor(Math.random() * shape.length)];
    document.getElementById(cur).setAttribute("id",random);
    cur = random;
}

document.getElementById("color").onclick = function(){
    var randomcolor = color[Math.floor(Math.random() * color.length)];
    document.getElementById("block").style.backgroundColor = randomcolor;
}
