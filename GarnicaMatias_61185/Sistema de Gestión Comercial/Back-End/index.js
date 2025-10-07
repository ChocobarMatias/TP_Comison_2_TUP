const express = require('express');
const dotenv = require('dotenv').config();
const { connection } = require('./config/db.js');
const metricasRoutes = require('./routes/metricas.routes.js');
const productosRoutes = require('./routes/productos.routes.js');
const usuariosRoutes = require('./routes/usuarios.routes.js');
const ventasRoutes = require('./routes/ventas.routes.js');
const proveedoresRoutes = require('./routes/proveedores.routes.js');

const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// RUTAS 
app.use('/api/metricas', metricasRoutes);
app.use('/api/productos', productosRoutes);
app.use('/api/usuarios', usuariosRoutes);
app.use('/api/ventas', ventasRoutes);
app.use('/api/proveedores', proveedoresRoutes);

// Ruta principal
app.get('/', (req, res) => {
    res.json({ 
        message: 'Bienvenido a la API de Gestión Comercial',
        endpoints: {
            metricas: '/api/metricas',
            productos: '/api/productos', 
            usuarios: '/api/usuarios',
            ventas: '/api/ventas',
            proveedores: '/api/proveedores'
        }
    });
});

// Iniciar servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`🚀 Servidor corriendo en el puerto ${PORT}`);
});