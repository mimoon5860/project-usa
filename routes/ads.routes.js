const express = require('express');
const { getSingleAd, createAd } = require('../controllers/adsControllers');
const multiFile = require('../middleware/fileUpload/multiFile');
const router = express.Router();

// Create a ad api 
router.post('/create/ad', multiFile, createAd);

// Get Single Ad route 
router.get('/single/ad/:id', getSingleAd);


module.exports = router;