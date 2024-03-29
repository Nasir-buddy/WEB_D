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
        return res(roll_no);
        // return rej("nothing to pass");
    }, 2000);
});

const getBiodata = (indexData) => {
    return new Promise((res, rej) => {
        setTimeout((indexData) => {
            let getBiodata = {
                name: "Nasir Ali",
                age: 22
            }
            return res(`My roll no is ${indexData}. My name is ${getBiodata.name} and I am ${getBiodata.age} old.`);        
        }, 2000, indexData)
    })
}


pobj1.then((roll_no)=>{
    console.log(roll_no);
    return getBiodata(roll_no[1]);
    // .then((anything) => {
        // console.log(anything);
    // })
}).then((anything) => {
    console.log(anything);
})
.catch((rej)=>{
    console.log("not resolved",rej);
});



// async await
async function getData(){
    try {
        const rollnodata = await pobj1
    console.log(rollnodata);
    const ans = await getBiodata(rollnodata[1]);
    // console.log(ans);
    return anss;
    } catch (error) {
        alert(`The Error: ${error}`);
        console.log(`The Error: ${error}`);
    }
    
}
const getname = getData().then((myname)=>{
    console.log(myname);
})