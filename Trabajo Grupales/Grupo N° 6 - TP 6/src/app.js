// Aqui se guarda toda la configuracion del servidor
// src/app.js
require("dotenv").config({ path: __dirname + "/../.env" });

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

// Conexión a la base de datos
require("./config/DB");

// Importar rutas
const librosRoutes = require("./routes/libros");
const alumnosRoutes = require("./routes/alumnos");
const prestamosRoutes = require("./routes/prestamos");
const mailRoutes = require("./routes/mail.routes");
const authRoutes = require("./routes/authRoutes");

// Crear instancia de express
const app = express();

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// Rutas principales
app.use("/libros", librosRoutes);
app.use("/alumnos", alumnosRoutes);
app.use("/prestamos", prestamosRoutes);
app.use("/mail", mailRoutes);
app.use("/auth", authRoutes);

// Endpoint de prueba DB
app.get("/ping", (req, res) => {
  const db = require("./config/DB");
  db.query("SELECT CURRENT_USER() AS user, DATABASE() AS db", (err, rows) => {
    if (err) return res.status(500).json(err);
    res.json(rows[0]);
  });
});

// Raíz
app.get("/", (_req, res) => res.send("API Biblioteca OK"));

// Exportar la app configurada
module.exports = app;




// // src/app.js (ESM)
// // Aquí se guarda toda la configuración del servidor

// import 'dotenv/config';          // equivale a require("dotenv").config()
// import express from 'express';
// import cors from 'cors';

// // ⬇️ Conexión a la base de datos (asegurate que DB.js exporte por default)
// import db from './config/DB.js';

// // ⬇️ Importar rutas (todas deben exportar `export default router`)
// import librosRoutes from './routes/libros.js';
// import alumnosRoutes from './routes/alumnos.js';
// import prestamosRoutes from './routes/prestamos.js';
// import mailRoutes from './routes/mail.routes.js';
// import authRoutes from './routes/authRoutes.js';

// const app = express();

// // Middlewares
// app.use(cors());
// app.use(express.json()); // reemplaza body-parser.json()

// // Rutas principales (mismo prefijo que tenías)
// app.use('/libros', librosRoutes);
// app.use('/alumnos', alumnosRoutes);
// app.use('/prestamos', prestamosRoutes);
// app.use('/mail', mailRoutes);
// app.use('/auth', authRoutes);

// // Endpoint de prueba DB (MySQL)
// app.get('/ping', (_req, res) => {
//   // `db` debe ser la conexión o pool (mysql2). Ejemplo: const db = mysql.createPool(...)
//   db.query('SELECT CURRENT_USER() AS user, DATABASE() AS db', (err, rows) => {
//     if (err) return res.status(500).json({ error: String(err) });
//     res.json(rows?.[0] ?? {});
//   });
// });

// // Raíz
// app.get('/', (_req, res) => res.send('API Biblioteca OK'));

// // Exportar la app configurada (ESM)
// export default app;
