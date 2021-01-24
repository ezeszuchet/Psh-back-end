const db = require('../db');

exports.lastStatCreated = (req, res) => {
    let sql = `select * from stat ORDER BY creation DESC LIMIT 1`
    db.query(sql, (err, result) => {
        if (err) throw err;
        console.log("Select query OK", result);
        res.sendStatus(202);
        return result
    });
};

//TODO delegar (Service)