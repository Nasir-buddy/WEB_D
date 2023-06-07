var arr = [20 , 34 , 54 ,34 ];
// same as array but array have some properties in it to accessing the elements...
var obj = {
    "0" : 20, 
    "1" : 34, 
    "2" : 54, 
    "3" : 34
}
// Iterating over array...
for(var i in arr){
    console.log(i);
}
for(var i in obj){
    console.log(i);
}