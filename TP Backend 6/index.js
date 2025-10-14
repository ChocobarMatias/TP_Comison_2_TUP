const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const librosRoutes = require('./routes/libros');
const alumnosRoutes = require('./routes/alumnos');
const prestamosRoutes = require('./routes/prestamos');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Rutas
app.use('/libros', librosRoutes);
app.use('/alumnos', alumnosRoutes);
app.use('/prestamos', prestamosRoutes);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
