const express = require('express');
const router = express.Router();
const { getAllAreas } = require('../controllers/areas');

router.get('/area', getAllAreas);

module.exports = router;