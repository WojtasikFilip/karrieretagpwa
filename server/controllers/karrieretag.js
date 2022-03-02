const asyncHandler = require('express-async-handler');

const karrieretagFunctions = require('../model/karrieretag');

const getFirmen = asyncHandler(async (req, res) => {
  res.status(201).json(await karrieretagFunctions.getFirmen());
});

module.exports = { getFirmen };
