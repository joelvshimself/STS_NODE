
const db = require('../config/db');


async function register(name, email, password) {
    const sql = 'INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING id, name, email, balance';
    const values = [name, email, password];
    const result = await db.query(sql, values);
    return result.rows[0];
}

module.exports = { register };





async function getAllUsers() {
  const result = await db.query('SELECT id, email FROM users');
  return result.rows;
}

module.exports.getAllUsers = getAllUsers;
