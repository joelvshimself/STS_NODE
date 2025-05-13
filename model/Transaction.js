
const db = require('../config/db');

async function create(sender_email, receiver_email, amount) {
  const sql = 'INSERT INTO transactions (sender_email, receiver_email, amount) VALUES ($1, $2, $3) RETURNING *';
  const values = [sender_email, receiver_email, amount];
  const result = await db.query(sql, values);
  return result.rows[0];
}




async function getHistoryByEmail(email) {
  const sql = 'SELECT * FROM transactions WHERE sender_email = $1';
  const values = [email];
  const result = await db.query(sql, values);
  return result.rows;
}

module.exports = {
    create,
    getHistoryByEmail
};
