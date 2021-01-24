const mysql = require('mysql');

//sql connection
const con = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'pshgame'
});

con.connect(function (err) {
    if (err) throw err;
    console.log("Connected sql!");
});

module.exports = con;


//TODO - Usar https://sequelize.org/master/ (orm)