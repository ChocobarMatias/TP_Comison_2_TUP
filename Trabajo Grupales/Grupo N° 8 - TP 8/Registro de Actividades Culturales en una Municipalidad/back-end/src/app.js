require("dotenv").config();
const express = require("express");
const cors = require("cors");

//Prisma maneja la conexión automáticamente
// const connection = require("./config/bd");

const app = express();

app.use(cors());
app.use(express.json());

// Importar rutas de artistas
const api = require("./routes/index.routes");

// Usar rutas de artistas bajo /api/artistas
app.use("/api", api);


// Prisma maneja la conexión de base de datos internamente.
// connection.connect((err) => {
//   if (err) {
//     console.error("Error conectando a la base de datos:", err);
//   } else {
//     console.log("Conectado a la base de datos correctamente");
//   }
// });



module.exports = app;
