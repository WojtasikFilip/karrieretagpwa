const express = require('express');

const { getFirmen } = require('../controllers/karrieretag');

const router = express.Router();

router.get('/firmen', getFirmen);

module.exports = router;
