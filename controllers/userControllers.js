const db = require('../models/db');

exports.getAllUsers = (req, res) => {
    res.send('get all users route');
}
exports.getSingleUser = (req, res) => {
    const id = req.params.id;
    const query = `SELECT name,email,country, phone, created_at AS starting_date FROM users WHERE id=${id}`;
    db.query(query, (err, rows, fields) => {
        if (rows) {
            res.status(200).send(rows);
        } else {
            res.status(404).send("user id not found")
        }
    })

}


exports.createUser = (req, res) => {
    res.send('create new user')
}