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
    var student = {};
    student.name = name;
    student.rollNO = rollNO;
    student.marks = marks;

    return student;
}

var student1 = createStudent("Nasir Al", 17 , 78);
var student2 = createStudent("Abhay Yadav", 87 , 75);
console.log(student1);
console.log(student2)