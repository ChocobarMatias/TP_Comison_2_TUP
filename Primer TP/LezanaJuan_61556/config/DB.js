const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: process.env.DB_HOST ,
  user: process.env.DB_USER ,
  password: process.env.DB_PASSWORD ,
  database: process.env.DB_NAME 
});

connection.connect(err => {
  if (err) {
    console.error('Error conectando a la DB:', err);
  } else {
    console.log('Conectado a la DB correctamente.');
  }
});

module.exports = connection;
