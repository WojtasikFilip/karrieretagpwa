const db = require('../db/index');

async function getFirmen() {
  const { rows } = await db.query('SELECT * FROM firma');
  return rows;
}

async function getVorträge() {
  const { rows } = await db.query('SELECT * FROM vortrag');
  return rows;
}

module.exports = { getFirmen, getVorträge };
