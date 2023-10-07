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

// require import the package
const exp = require('express');
// saving in the variable 
const app = exp();
// creating the port 
const port = 3000;
// just for checking the server 
console.log("Server is started successfully on port :", port);

// This is middleware that run before the any route
app.use(function(req, res, next){
    console.log("Middle ware.");
    next();
});

// route 
app.get('/', (req, res)=>{
    res.send("hey me");
});
// route 2nd
app.get('/profile', (req, res)=>{
    res.send("hey this is profile page.");
});
// 3rd rotute
app.get('/like', (req, res)=>{
    res.send("hey like me.");
});
// listning the port 
app.listen(port);
