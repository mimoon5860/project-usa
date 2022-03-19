const mysql = require('mysql2')
require('dotenv').config();

const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    database: "project_usa",
    password: "Mo62466385@",
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
})

module.exports = pool;