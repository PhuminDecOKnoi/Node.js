var mysql = require('mysql');
var myModule = require('./modules');
var conn = myModule.connMySQL(); //Connected to MySQL
var sql = "SELECT * FROM `tb_test`";
conn.query(sql, function (err, result, fields) {
    if (err)
        throw err;
    console.log(result[0]);
    console.log(result[1]);
    console.log(result[2]);
});
