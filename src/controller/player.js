const db = require('../db');

exports.listTopPlayers = (req, res) => {
    let sql = `SELECT profileImage, username, stat.creation FROM player INNER JOIN stat ON player.idPlayer = stat.idPlayer ORDER BY score DESC LIMIT ${req.query.top}`
    db.query(sql, (err, result) => {
        if (err) throw err;
        console.log("Select query OK", result);
        res.json(result)
    });
};
