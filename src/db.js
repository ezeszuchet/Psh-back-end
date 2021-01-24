const mysql = require('mysql');

//sql connection local
/*const con = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'pshgame'
});*/

//sql connection production
const con = mysql.createConnection('mysql://n41n45c9dkn2jbu9:wc3qhh7j0ax8s6c5@cis9cbtgerlk68wl.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/smdnzbhbqupmymen');



con.connect(function (err) {
    if (err) throw err;
    console.log("Connected sql!");
});

module.exports = con;


//TODO - Usar https://sequelize.org/master/ (orm)