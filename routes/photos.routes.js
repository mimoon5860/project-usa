const express = require('express');
const { getUserPhoto, getAdsPhoto } = require('../controllers/photosControlers');

const router = express.Router();


// Get a single photo of an user router
router.get('/user/:avatar', getUserPhoto);

// Get a single photo of a ad
router.get('/ads/:photo', getAdsPhoto);


module.exports = router;