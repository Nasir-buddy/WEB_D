var second = 1; 
function sayHello(){
    console.log("After", second);
    second++;
    if(second == 6){
        // stop
        clearInterval(id);
    }
}
// sayHello is making a function and 2000 is time in milli second which denote that the 
// function execute after that time.

// setTimeout(sayHello, 2000);
// setInterval(sayHello, 1000);

var id = setInterval(sayHello, 1000)
