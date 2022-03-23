const db = require('../models/db');


// create a ad api 
exports.createAd = (req, res) => {
    const { user_id, title, location, details, name, sex, age, service, phone, service_for, specific_location, show_email, state, city, category, created_at, status } = req.body;
    const files = req.files;

    const query = `INSERT INTO ads (u_id,title,location, details, name, sex, age, service, phone, service_for, specific_location, show_email, state, city, category, created_at, status, pics) VALUES(${user_id}, '${title}', '${location}','${details}', '${name}', '${sex}', ${age}, '${service}', '${phone}', '${service_for}', '${specific_location}', ${show_email}, '${state}','${city}', '${category}', '${created_at}','${status}', 'pics' )`;

    db.query(query, (err, rows, fields) => {
        if (err) {


            throw new Error(err.message);
        }

        if (rows.insertId) {
            const insertId = rows.insertId;
            for (const file of files) {
                const query = `INSERT INTO ads_photo(ad_id, photo) VALUES(${insertId}, '${file.filename}')`
                db.query(query, (err, rows, fields) => {
                    if (err) {
                        throw new Error(err.message);
                    }
                    if (rows.insertId) {
                        res.status(200).send({
                            success: true,
                            insertId: insertId
                        });
                    }
                })
            }
        }
    })
}



// get single ad api 
exports.getSingleAd = (req, res) => {
    const id = req.params.id;
    let adData = {};
    const query = `SELECT u_id AS user_id, title, location, details, name,sex,age,service,phone,service_for,specific_location,show_email,state,city,category FROM ads WHERE id=${id}`;

    const queryImg = `SELECT photo FROM ads_photo WHERE ad_id=${id}`;

    db.query(query, (err, rows, fields) => {
        if (err) {
            throw new Error(err.message);
        }
        if (rows) {
            adData = rows[0];
            db.query(queryImg, (err, rows, fields) => {
                if (rows.length) {
                    adData.photos = rows;
                    res.status(200).send(adData);
                }
            })
        }
    })
}