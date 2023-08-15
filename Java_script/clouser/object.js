// var student1 = {
//     name: 'Nasir Ali',
//     marks: ' 70',
//     rollNo: '72',
// };

// var student2 = {
//     name: 'Nasir Ali',
//     marks: ' 70',
//     rollNo: '72',
// };
// console.log(student1);

function createStudent(name , rollNO , marks){
    // var student = {};
    this.name = name;
    this.rollNO = rollNO;
    this.marks = marks;

    // return student;
}

var student1 = new createStudent("Nasir Al", 17 , 78);
var student2 = new createStudent("Abhay Yadav", 87 , 75);
console.log(student1);
console.log(student2)