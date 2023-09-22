fetch('https://data.covid19india.org/v4/min/data.min.json')
.then( (apiData) => { 
    // console.log(apiData);
    return apiData.json();
})
.then((actualData)=>{
    console.log(actualData);
}).catch((error)=>{
    console.log(error);
})