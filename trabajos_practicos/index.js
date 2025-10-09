import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import db from './config/database.js';

import usuariosRoutes from './routes/usuarios.routes.js';
import proveedoresRoutes from './routes/proveedores.routes.js';
import productosRoutes from './routes/productos.routes.js';
import ventasRoutes from './routes/ventas.routes.js';
import metricasRoutes from './routes/metricas.routes.js';

dotenv.config();

// Creamos la conexión a la base de datos antes que inicie el servidor
db.connect((err) => {
    if (err) {
        console.error('Error de conexión: ❌', err);
        return;
    }
    console.log('✅ Conexión a MySQL exitosa 🚀');
});

const app = express();
const PORT = process.env.PORT || 4000;

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(morgan('combined'));

app.use('/api/usuarios', usuariosRoutes);
app.use('/api/proveedores', proveedoresRoutes);
app.use('/api/productos', productosRoutes);
app.use('/api/ventas', ventasRoutes);
app.use('/api/metricas', metricasRoutes);

app.get('/', (req, res) => {
    res.json({ message: 'Sistema de comercio - API funcionando ✅' });
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto ${PORT} 🚀`);
});