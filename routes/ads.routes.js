const express = require('express');
const { getSingleAd, createAd, getMultiAds, getUsersAds } = require('../controllers/adsControllers');
const multiFile = require('../middleware/fileUpload/multiFile');
const router = express.Router();

// Create a ad api 
router.post('/create/ad', multiFile, createAd);

// Get Single Ad route 
router.get('/single/ad/:id', getSingleAd);

// get multiple ads
router.get('/multi/ads/:count', getMultiAds);

// get single users ads
router.get('/user/:id', getUsersAds);


module.exports = router;