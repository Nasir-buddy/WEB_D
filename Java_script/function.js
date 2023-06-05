// function sum(a , b){
//     // console.log(a + b);
//     return a + b;
// }
// var result = sum(10 , 3, 32);
// console.log(result);        

// function hoisetDemo(){
//     console.log(i);
//     var i = 10;
// }
// hoisetDemo();
// var name = "Global";
// // console.log(name);

// function scopeDemo() {
//     var name = "Function";
//     console.log(name);
// }
// scopeDemo();
// console.log(name);
// console.log(i);
function c(){
    console.log("Inside c");
}
function b(){
    c();
    console.log("Inside b");
}
function a(){
    b();
    console.log("Inside a");
}
a();
console.log("Global context.")