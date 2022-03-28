const db = require('../models/db');

exports.getAllUsers = (req, res) => {
    const query = `SELECT name,email,country, phone, created_at AS starting_date FROM users`;
    db.query(query, (err, rows, fields) => {
        if (err) {
            throw new Error(err.message);
        }
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
    const { name, email, created_at, country, phone, state, city, post, address } = req.body || {};
    const avatar = req.file;

    const query = `insert into users (email, name, created_at, balance, country, phone, status, state, city,avatar, post, address) values('${email}', '${name}','${created_at}', 0,'${country}', '${phone}', 'pending', '${state}', '${city}', '${avatar}', ${post}, '${address}')`;

    try {
        db.query(query, (err, rows, fields) => {
            if (err) {
                throw new Error(err.message);
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