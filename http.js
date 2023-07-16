const http = require('http');
const mysql = require('mysql');

const conn = mysql.createConnection({
    host : "localhost",
    user :"root",
    password: "",
    database:"test"
});
conn.connect(function(err){
    if(err) throw err;
    console.log("Connected!");
});
http.createServer(function(req ,res){
    res.writeHead(200, {"Content-Type":"text/html;charset=utf-8"});
    const sql = "SELECT * FROM `tb_test`";
    conn.query(sql ,function(err ,result,fields){
       if(err) throw err;
        res.write("<div>");
        res.write("<div>" + result[0]['ID'] + result[0]['User'] +"</div>");
        res.write("<div>" + result[1]['ID'] + result[1]['User'] +"</div>");
        res.write("<div>" + result[2]['ID'] + result[2]['User'] +"</div>");
        res.write("<div>" + result[3]['ID'] + result[3]['User'] +"</div>");
        res.write("</div>");
        res.end();
    });
}).listen(8008);
