const { app, connectDb } = require('./app');

const PORT = process.env.PORT || 8080;

connectDb();


const rutasActividades = require("./src/routes/actividades.routes");
const rutasReservas = require("./src/routes/reservas.routes");
const rutasSocios = require("./src/routes/socios.routes");
const rutasAuth = require("./src/routes/auth.routes");
const rutasAdmin = require("./src/routes/administradores.routes");
app.use("/api/actividades", rutasActividades);
app.use("/api/reservas", rutasReservas);
app.use("/api/socios", rutasSocios);
app.use("/api/auth", rutasAuth);
app.use("/api/admin", rutasAdmin);

app.listen(PORT, () => console.log(`🚀 Servidor corriendo en puerto ${PORT}`));
