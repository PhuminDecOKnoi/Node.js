const mysql = require('mysql')

const HOSTNAME : string = 'localhost'
const USER : string = 'root'
const PWD : string = ''
const DB : string = 'test'

exports.connMySQL = function() {

    const conn = mysql.createConnection({
        host : HOSTNAME,
        user : USER,
        password : PWD,
        database : DB
    })
     conn.connect(function(err : boolean){
    if(err) throw err
        console.log("Connected!")
     })
     return conn
}