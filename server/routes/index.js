const express = require('express');

const { getFirmen, getVorträge } = require('../controllers/karrieretag');

const router = express.Router();

router.get('/firmen', getFirmen);
router.get('/vortrag', getVorträge);

module.exports = router;
