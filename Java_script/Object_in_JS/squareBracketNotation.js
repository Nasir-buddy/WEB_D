var student = {
    name: "Nasir Ali",
    rollNo: 72 ,
    marks: 70 
};

function printProp(object , prop){
    console.log(object[prop]);
}
printProp(student, "marks");