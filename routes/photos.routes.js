const express = require('express');
const { getUserPhoto } = require('../controllers/photosControlers');
const router = express.Router();


// Get a single photo of an user router
router.get('/user/:avatar', getUserPhoto);


module.exports = router;