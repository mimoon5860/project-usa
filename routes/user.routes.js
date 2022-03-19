const express = require('express');
const router = express.Router();
const { getSingleUser, getAllUsers, createUser } = require('../controllers/userControllers');

// get all users
router.get('/all', getAllUsers);

// get a single user 
router.get('/:id', getSingleUser);

// create an user 
router.post('/create-user', createUser)

module.exports = router;