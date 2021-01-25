const _ = require('lodash');
const request = require('request');
const db = require('../db');

exports.create = () => {
    request.get('https://randomuser.me/api', { json: true }, (err, httpRes, body) => {
        if(err) throw err;

        const player = body;
        if (_.isEmpty(player) || !_.isObject(player)) return console.log("Rompio la api de RandomUser pero devuelve un html con el error");
        let sql = `INSERT INTO Player (username, profileImage) VALUES ("${completeName(player.results[0].name)}", "${player.results[0].picture.medium}")`;
        db.query(sql, (err, result) => {
            if(err) throw err;
            console.log("1 row inserted, player");
            let sqlStat = `INSERT INTO  stat (idPlayer, score) VALUES (${result.insertId}, ${getRandomScore(1, 100)})`

            db.query(sqlStat, (errStat, resultStat) => {
                if(errStat) throw errStat;
                console.log("1 row inserted, stat");
            });
        });
    });
}


const completeName = ({ title, first, last }) => title + "." + first + " " + last;
const getRandomScore = (min, max) => Math.floor(Math.random() * (max - min) + min)