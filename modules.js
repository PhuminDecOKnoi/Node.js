var mysql = require('mysql');
var HOSTNAME = 'localhost';
var USER = 'root';
var PWD = '';
var DB = 'test';
exports.connMySQL = function () {
    var conn = mysql.createConnection({
        host: HOSTNAME,
        user: USER,
        password: PWD,
        database: DB
    });
    conn.connect(function (err) {
        if (err)
            throw err;
        console.log("Connected!");
    });
    return conn;
};
