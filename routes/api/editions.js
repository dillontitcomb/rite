const express = require('express');
const router = express.Router();

// @route api/editions
// @desc Test route
// @access Public
router.get('/', (req, res) => res.send('Editions route!'));

module.exports = router;
