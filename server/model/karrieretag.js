const db = require('../db/index');

async function getFirmen() {
  const {rows} = await db.query('SELECT * FROM firma');
  return rows;
}

module.exports = { getFirmen };
