// async js kya hai ?
// async code kuch der bad chalega jbbhi chalega wo callback ko chala dega
console.log("hey")

setTimeout(() => { // known as call fns.. because it will run after getting answer
    console.log("hey2")
}, 2000);
// console.log("hi")

//async ki poori kahani
// Js is not asynchronous 
// there is two thing 
// 1st is main stack 
// jo bhi main stack pe hota hai wo chalta hai and jo bhi
// 2nd is side stack
// aur jo bhi side stack pe hota hai wo begind the scenes procerssing kr sakta hai aur jab
// uski processing complete ho use main stack me la ke chalaya ja sakta hai 

// single threading and multi threading
// sync code always runs on main stack 
console.log("hey 1");
console.log("hey 2");
// this fn will run at last because it will check side stack in last 
setTimeout(()=>{
    console.log("hey 3");
}, 0);
console.log("hey 4");

// callbacks
// call back hamesa ek function hota hai , ye sirf tab chalta hai jab asynch code ka completion hojata hai.
// async code likhne ke liye 
// fetch
// XMLHttpRequest
// axios
//  promises
// settimeout
// setinterval
// inka ans chalane ke liye hota hai callback
// ''          ''            ''      then catch
//  ''        ''             ''       async await

//  fetch
    // axios
    // promises
// var ans = new Promise((res, rej)=>{
//         if(false){
//             return res();
//         } else {
//             return rej();
//         }
//     });
//     ans
//         .then(()=>{
//             console.log("resolve ho gya tha.");
//         })
//         .catch(()=>{
//             console.log("resolve nhi hua");
//         });
var ans = new Promise((res, rej)=>{
    var n = Math.floor(Math.random() * 10);
    if(n < 5){
        return res();
    } else {
        return rej();
    }
})
ans.then(()=>{
    console.log("below 5");
})
.catch(()=>{
    console.log("not resolve")
})
    // settimeout
    // setinterval

    // then catch
    // callback
    // async await
