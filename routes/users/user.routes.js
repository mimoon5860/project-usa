const express = require('express');
const pool = require('../../config/db');
const router = express.Router();


// get all users
router.get('/all', (req, res) => {
    res.send('get all users route');
})

// get a single user 
router.get('/:id', (req, res) => {
    res.send('get single user route');
})

// create an user 
router.post('/create-user', async (req, res) => {
    const { email, name, date } = req.body;
    try {
        const sql = `select * from users`

        const result = await pool.execute(sql)
    } catch (error) {
        console.log(error)
    }

    res.send('create new user route');
})

module.exports = router;