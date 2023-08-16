const os = require('os');

const info = ()=>{
    console.log("Architecture of os ",os.arch());
    console.log("Free mem of os ",os.freemem('${freemem / 1024 / 1024 / 1024}'));
    console.log("user info of os ",os.userInfo());
    console.log("Avg load of os ",os.loadavg());
    console.log("Total memory of os",os.totalmem());
    console.log("HostName of OS ",os.hostname());
    console.log("OS platform ",os.platform());
    console.log("Directory of os: ",os.tmpdir());
    console.log("Type of operating system : ",os.type());
}

info();