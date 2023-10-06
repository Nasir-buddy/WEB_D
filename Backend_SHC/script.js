// npm ek jagah hai jahan pe khub sare package milte hain 
// bani banaai cheejein / features kehlaate hain package

// package -> 
// text -> voice
// npm package text -> voice
// install
// npm i i = install both can be usable 
// use
// how to print results
var oneLineJoke = require('one-liner-joke');
var figlet = require('figlet');

console.log(oneLineJoke.getRandomJoke());

figlet("Nasir Ali", function(err, data){
    if(err){
        console.log("Something went wrong...");
        console.log(err);
        return;
    } 
    console.log(data);
})

