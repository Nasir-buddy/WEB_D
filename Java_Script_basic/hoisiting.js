var a = [12 , 13];
var b = a;
b.pop();
console.log(a);

// loops

for(var i = 0; i < 5 ; i++){
    for(var j = 0; j < i; j++){
        console.log("*");
    }
    console.log();
}