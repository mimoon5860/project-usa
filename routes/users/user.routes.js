const express = require('express');
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
    console.log(req.body);

    // try {
    //     const sql = `select * from users`
    //     const result = await 
    // } catch (error) {
    //     console.log(error)
    // }

    res.send('create new user route');
})

module.exports = router;