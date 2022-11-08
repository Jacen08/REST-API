//install the package for mysql 
const db = require('mysql2');
const sql = db.createConnection(
    {
        host: "127.0.0.1",
        user: "root",
        database: "Payjack",
        password:"",
        port: "3308"
    }

).on('error',function(err){
    console.log("Failed to connect to database -", err)
    })
//this allows the file to be accessed everywhere
module.exports = sql;