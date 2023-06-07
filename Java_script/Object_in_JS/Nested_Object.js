var student = {
    name : "Nasir Ali",
    rollNo : 72,
    marks : 70,

    address: {
        city: "New Delhi",
        pincode : 110032
    }
};
// console.log(student.address);
for(var prop in student){
    console.log(prop , student[prop]);
}