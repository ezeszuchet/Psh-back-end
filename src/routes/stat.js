const express = require('express');
const { lastStatCreated } = require('../controller/stat');
const router =  express.Router();

router.get('/last', lastStatCreated);

module.exports = router;