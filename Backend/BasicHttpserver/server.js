const http = require("node:http");
const port = 8000;
// fs is use to read and writing into from a files.
const fs = require('fs');
// request handler
function requestHandler(request, response){
    // console.log(request.url);
    response.writeHead(200, {'contect-type': 'text/html'});
    //fs = file system
    let filePath;

    switch(request.url){
        case '/':
            filePath = './index.html'
            break;
        case '/form':
            filePath = './form.html'
            break;
        default:
            filePath = './404.html'
    }
    fs.readFile(filePath, function(err, data){
        if(err){
            console.log('error', err);
            return response.end('<h1>Error!</h1>');
        }
        return response.end(data);
    })
};
const server = http.createServer(requestHandler);

server.listen(port , function(err){
    if(err){
        console.log(err);
        return ;
    }
    console.log("Server is running successfully on port:",port);
});