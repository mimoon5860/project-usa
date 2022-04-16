const express = require('express');
const { getStatesCities } = require('../controllers/citiesControllers');
const router = express.Router();

// Get cities by single state
router.get('/of/:state', getStatesCities)

module.exports = router;