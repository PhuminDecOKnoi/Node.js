var http = require('http');
var url = require('url'); 
var mysql = require('mysql'); // mySQL Requirement

var conn = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: ""
});
// Connect mySQL Database
conn.connect(function(err){
    if(err) throw err;
       console.log('Connected!');
    
    var sql = 'USE TEST';
    conn.query(sql, function(err,result){
        console.log("Result:" + result);
    });

    var sql = 'SELECT * FROM `tb_test` WHERE 1';
    conn.query(sql, function(err, result){
        http.createServer(function(req,res){
        res.writeHead(200,{'Content-Type':'text/html'});
        var setStr = url.parse(req.url, true).query;
        var getStr = setStr.dStr +" "+ setStr.mStr;
        res.write("Result:" + result);
        res.end();

        }).listen(3000);
    });
});
