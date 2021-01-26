const db = require('../db');

exports.listTopPlayers = (req, res) => {
    let sql = `SELECT profileImage, username, MAX(s.score) AS MaxScore, MAX(s.creation) AS LastUpdateDate
                FROM player p
                INNER JOIN stat s
                    ON p.idPlayer = s.idPlayer
                GROUP BY p.idPlayer, profileImage, username
                ORDER BY MaxScore DESC
                LIMIT ${req.query.top || 10}`
    db.query(sql, (err, result) => {
        if (err) throw err;
        console.log("Select query OK", result);
        res.json(result)
    });
};
