// npm ek jagah hai jahan pe khub sare package milte hain 
// bani banaai cheejein / features kehlaate hain package

// package -> 
// text -> voice
// npm package text -> voice
// install
// npm i i = install both can be usable 
// use
// how to print results
// var oneLineJoke = require('one-liner-joke');
// var figlet = require('figlet');

// console.log(oneLineJoke.getRandomJoke());

// figlet("Nasir Ali", function(err, data){
//     if(err){
//         console.log("Something went wrong...");
//         console.log(err);
//         return;
//     } 
//     console.log(data);
// })


const exp = require('express');
const app = exp();
const port = 3000;
console.log("Server is started successfully on port :", port);
app.get('/', (req, res)=>{
    res.send("hey me");
});
app.get('/profile', (req, res)=>{
    res.send("hey this is profile page.");
});
app.get('/like', (req, res)=>{
    res.send("hey like me.");
});
app.listen(port);