const db = require('../models/db');


// Get Cities by State 
exports.getStatesCities = (req, res) => {
    const state = req.params.state;

    const query = `SELECT city FROM cities WHERE state="${state}"`;

    db.query(query, (err, rows, fields) => {
        if (err) {
            throw new Error(err.message);
        }
        if (rows.length) {
            res.status(200).send({
                success: true,
                data: rows
            });
        } else {
            res.status(404).send({
                success: false,
                message: "No City Found"
            })
        }
    })
}