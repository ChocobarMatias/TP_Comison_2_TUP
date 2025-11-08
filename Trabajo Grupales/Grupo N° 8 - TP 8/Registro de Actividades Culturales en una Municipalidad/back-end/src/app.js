require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connection = require("./config/bd"); // tu conexión a MySQL

const app = express();

app.use(cors());
app.use(express.json());

// Importar rutas de artistas
const artistasRoutes = require("./routes/artistas.routes");
const authRoutes = require("./routes/auth.routes");
const eventosRoutes = require("./routes/eventos.routes");
const lugaresRoutes = require("./routes/ventas_boletos.routes");
const ventasRoutes = require("./routes/ventas_boletos.routes");

// Usar rutas de artistas bajo /api/artistas
app.use("/artistas", artistasRoutes);
app.use("/auth", authRoutes);
app.use("/eventos", eventosRoutes);
app.use("/lugares", lugaresRoutes);
app.use("/ventas", ventasRoutes);

// Probar conexión a la DB
connection.connect((err) => {
  if (err) {
    console.error("Error conectando a la base de datos:", err);
  } else {
    console.log("Conectado a la base de datos correctamente");
  }
});

module.exports = app;
