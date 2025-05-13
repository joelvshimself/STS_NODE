const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  port: 5432, // Puerto PostgreSQL por defecto
  ssl: { rejectUnauthorized: false } // Render exige SSL
});

pool.connect()
  .then(() => console.log('Conectado a PostgreSQL en Render'))
  .catch(err => console.error('Error de conexión:', err));

module.exports = pool;
