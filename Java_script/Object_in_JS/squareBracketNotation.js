var student = {
    name: "Nasir Ali",
    rollNo: 72 ,
    marks: 70 
};
// delete student.marks;
// function printProp(object , prop){
//     console.log(object[prop]);
// }
// printProp(student, "marks");
// 1st method to print
var keys = Object.getOwnPropertyNames(student); 
// 2nd method to print 
for(var prop in student){
    console.log(prop , student[prop]);
}

// 3rd method to print 
for(var prop in student){
    console.log(prop)
}