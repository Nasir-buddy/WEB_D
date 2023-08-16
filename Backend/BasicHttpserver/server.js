const http = require("node:http");
const port = 8000;
// request handler
function requestHandler(request, response){
    console.log(request.url);
    response.end("hello")
}
const server = http.createServer(requestHandler);

server.listen(port , function(err){
    if(err){
        console.log(err);
        return ;
    }
    console.log("Server is running successfully on port: ",port);
});