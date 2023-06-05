function outer (){
    var outerVar = 10;
    function inner(){
        var innerVar = 20;
        console.log(outerVar);
    }
    inner();
    // console.log(innerVar);
}
// console.log("Running");
outer();