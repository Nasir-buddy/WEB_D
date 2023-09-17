// async js kya hai ?
// async code kuch der bad chalega jbbhi chalega wo callback ko chala dega
console.log("hey")

setTimeout(() => { // known as call fns.. because it will run after getting answer
    console.log("hey2")
}, 2000);
console.log("chut")

// Js is not asynchronous 
// there is two thing 
// 1st is main stack 
// jo bhi main stack pe hota hai wo chalta hai and jo bhi
// 2nd is side stack
// aur jo bhi side stack pe hota hai wo begind the scenes procerssing kr sakta hai aur jab
// uski processing complete ho use main stack me la ke chalaya ja sakta hai 

// sync code always runs on main stack 
console.log("hey 1");
console.log("hey 2");
// this fn will run at last because it will check side stack in last 
setTimeout(()=>{
    console.log("hey 3");
}, 0);
console.log("hey 4");
//async ki poori kahani