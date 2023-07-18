const http = require('http');
const server = http.createServer(function(reqest, response){
    response.writeHead(200,{"Content-Type":"text/html;charset=utf-8"})

    response.write("Http2.js");
    response.write("<hr/>");

    response.end(); 
}).listen(3000);