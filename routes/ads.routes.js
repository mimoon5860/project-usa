const express = require('express');
const { getSingleAd, createAd, getMultiAds, getUsersAds, insertCity, deleteSingleAd } = require('../controllers/adsControllers');
const multiFile = require('../middleware/fileUpload/multiFile');
const { upload } = require('../middleware/UploadData/noFile');
const router = express.Router();

// Create a ad api 
router.post('/create/ad', multiFile, createAd);

// Get Single Ad route 
router.get('/single/ad/:id', getSingleAd);

// get multiple ads
router.get('/multi/ads/:count', getMultiAds);

// get single users ads
router.get('/user/:id', getUsersAds);

// delete single ad 
router.delete('/delete/ad/:id', deleteSingleAd);





// insert cities 

router.post('/insert/city', upload.none(), insertCity);






module.exports = router;