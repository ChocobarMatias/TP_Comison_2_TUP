require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connection = require("./config/bd"); // tu conexión a MySQL

const app = express();

app.use(cors());
app.use(express.json());

// Probar conexión a la DB
connection.connect((err) => {
  if (err) {
    console.error("Error conectando a la base de datos:", err);
  } else {
    console.log("Conectado a la base de datos correctamente");
  }
});

module.exports = app;
