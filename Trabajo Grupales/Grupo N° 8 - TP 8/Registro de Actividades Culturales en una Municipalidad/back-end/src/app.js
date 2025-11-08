require("dotenv").config();
const express = require("express");
const cors = require("cors");

//Prisma maneja la conexión automáticamente
// const connection = require("./config/bd");

const app = express();

app.use(cors());
app.use(express.json());


const artistasRoutes = require("./routes/artistas.routes");
const authRoutes = require("./routes/auth.routes");
const eventosRoutes = require("./routes/eventos.routes");
const lugaresRoutes = require("./routes/lugares.routes"); // ⚠️ corregí: antes apuntaba a ventas
const ventasRoutes = require("./routes/ventas_boletos.routes");
const authPasswordRoutes = require("./routes/password.routes");


app.use("/auth", authPasswordRoutes);
app.use("/artistas", artistasRoutes);
app.use("/auth", authRoutes);
app.use("/eventos", eventosRoutes);
app.use("/lugares", lugaresRoutes);
app.use("/ventas", ventasRoutes);


// Prisma maneja la conexión de base de datos internamente.
// connection.connect((err) => {
//   if (err) {
//     console.error("Error conectando a la base de datos:", err);
//   } else {
//     console.log("Conectado a la base de datos correctamente");
//   }
// });



module.exports = app;
