/* const mysql = require('mysql2');
require('dotenv').config();

// Conexión simple con soporte para async/await
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
}).promise();

module.exports = connection; */



//comento db, porque voy a usar prisma.