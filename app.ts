const mysql = require('mysql')
const myModule = require('./modules')
const conn = myModule.connMySQL() //Connected to MySQL
const sql : string = "SELECT * FROM `tb_test`"
conn.query(sql,function(err:Boolean ,result : string[],fields : string[]){
    if(err) throw err
        console.log(result[0])
        console.log(result[1])
        console.log(result[2])
     })