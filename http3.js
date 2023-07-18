const http = require('http');
const port = 3000;

http.createServer(render).listen(port);
console.log('Server started on port :${port}');

function render(reqest, response){
    response.writeHeader(200,{'Content-Type':'text/html;charset=utf-8'});
    let html='<html><head><titl></titl><body>Http3.js<hr/></body></head></html>';
    response.write(html);
    response.end();
}