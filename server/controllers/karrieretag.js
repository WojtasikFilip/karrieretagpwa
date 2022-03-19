const asyncHandler = require('express-async-handler');

const karrieretagFunctions = require('../model/karrieretag');

const getFirmen = asyncHandler(async (req, res) => {
  res.status(200).json(await karrieretagFunctions.getFirmen());
});

const getVorträge = asyncHandler(async (req, res) => {
  res.status(200).json(await karrieretagFunctions.getVorträge());
});

module.exports = { getFirmen, getVorträge };
