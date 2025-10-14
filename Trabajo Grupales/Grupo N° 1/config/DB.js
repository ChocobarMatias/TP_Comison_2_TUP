const mysql = require('mysql2');

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'contraseña',
    database: 'biblioteca'
});

module.exports = db;
