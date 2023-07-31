const Connection = require('mysql/lib/Connection')
const myModule = require('./modules')
console.log(myModule.myHelloworld())

const myHost = 'localhost'
const myUser = 'root'
const myPassword = ''
const myDB = ''

const mysql = require('mysql')
const conn = mysql.createConnection({
    host : mysql,
    user : myUser,
    password : myPassword,
    database : myDB
})
conn.connect(function(err){
    if(err) throw('Connected')
})