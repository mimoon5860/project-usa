const db = require('../models/db');

exports.getAllUsers = (req, res) => {

    res.send('get all users route');
}
exports.getSingleUser = (req, res) => {
    const id = req.params.id;
    const query = `SELECT name,email,country, phone, created_at AS starting_date FROM users WHERE id=${id}`;
    try {
        db.query(query, (err, rows, fields) => {
            if (rows) {
                res.status(200).send({
                    status: 'success',
                    data: rows[0]
                });
            } else {
                res.status(404).send("user id not found")
            }
        })
    } catch (err) {
        res.send("Something is wrong, try again")
    }

}


exports.createUser = (req, res) => {
    const { name, email, created_at, username, country, phone, state, city, post, address, password } = req.body;
    const query = `INSERT INTO users (name, email,password, created_at,username,country,phone,state,city,post,address,balance,avatar)
    VALUES ('${name}', '${email}','${password}' '${created_at}','${username}', '${country}', '${phone}', '${state}', '${city}', ${post},'${address}', 0)`;
    db.query(query, (err, rows, fields) => {
        console.log(rows);
        console.log(fields);
        console.log(err);
    })
    res.send('create new user')
}