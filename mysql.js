var mysql = require('mysql');
var http = require('http');

var conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "test"
});
conn.connect(function(err){
    if(err) throw err;
    console.log("Connected!");

});    
    var sql = "SELECT * FROM `tb_test`";
    conn.query(sql ,function(err ,result,fields){
       if(err) throw err;

       http.createServer(function(req ,res){
            res.writeHead(200, {'Content-Type':'text/html'});
            
            res.write("<div>" + result[0]['ID'] + result[0]['User'] +"</div>");
            res.write("<div>" + result[1]['ID'] + result[1]['User'] +"</div>");
            res.write("<div>" + result[2]['ID'] + result[2]['User'] +"</div>");
            res.write("<div>" + result[3]['ID'] + result[3]['User'] +"</div>");
        
            /* Form file Upload */
            res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
            res.write('<input type="file" name="filetoupload"><br>');
            res.write('<input type="submit">');
            res.write('</form>');

            res.end();
        }).listen(8008);
    });
