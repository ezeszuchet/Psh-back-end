const express = require('express');
const { listTopPlayers } = require('../controller/player');
const router =  express.Router();

router.get('/', listTopPlayers);

module.exports = router;