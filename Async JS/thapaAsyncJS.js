// const func2 = () => {
//     setTimeout(() => {
//         console.log("Fun 2 is calling.")
//     }, 2000);
// }
// const func1 = () => {
//     console.log("fun 1 is calling.");
//     func2();
//     console.log("Ending");
// }
// func1();

//executer
//promises
const pobj1 = new Promise((res, rej) => {
    setTimeout(() => {
        let roll_no = [1, 2, 3, 4, 5];
        // return res(roll_no);
        return rej("nothing to pass");
    }, 2000);
});
pobj1.then((roll_no)=>{
    console.log(roll_no);
})
.catch((rej)=>{
    console.log("not resolved",rej);
})