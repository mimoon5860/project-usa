const db = require('../models/db');

exports.getAllUsers = (req, res) => {
    const query = `SELECT name,email,country, phone, created_at AS starting_date FROM users`;
    db.query(query, (err, rows, fields) => {
        console.log(rows);
        res.status(200).send({
            success: true,
            data: rows

        })
    })
}

exports.getSingleUser = (req, res) => {
    const id = req.params.id;
    const query = `SELECT name, email, country, phone, created_at AS starting_date, avatar AS img FROM users WHERE id=${id}`;

    db.query(query, (err, rows, fields) => {
        if (err) {
            console.log(err);
            throw new Error(err.message);
        }
        if (rows) {
            res.status(200).send({
                success: true,
                data: rows[0]
            });
        } else {
            res.status(404).send("user id not found");
        }
    })


}


exports.createUser = (req, res) => {
    const { name, email, created_at, username, country, phone, state, city, post, address, password } = req.body;
    const avatar = req.file;

    const query = `insert into users (email, name, created_at, username, balance, country, phone, status, state, city,avatar, password, post, address) values('${email}', '${name}','${created_at}','${username}', 0,'${country}', '${phone}', 'pending', '${state}', '${city}', '${avatar}', '${password}', ${post}, '${address}')`;

    try {
        db.query(query, (err, rows, fields) => {
            if (err) {
                console.log(err);
                res.status(404).send(err.sqlMessage);
            }
            if (rows?.insertId) {
                res.status(200).send({
                    success: true,
                    insertId: rows.insertId
                })
            };
        })
    } catch (err) {
        throw new Error("Something is wrong, Please try again");
    }
}