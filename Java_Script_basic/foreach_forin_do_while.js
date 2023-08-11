// for each loop run only on the array data type 
var a = [1,2,3,4,5,6,7,8,9,];

a.forEach(function(val){
    console.log(val + 2);
})
console.log(a);

// forin
// objests par lop karne ke liye hota hai foin loop 
var obj = {
    name: "Nasir Ali",
    age: 23,
    city: "bhopal"
}
for(var iterate in obj){
    console.log(iterate , obj[iterate]);
}