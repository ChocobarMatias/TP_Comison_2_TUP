
import express from 'express';
import cors from 'cors';


import { requestLogger } from './src/middlewares/requestLogger.js';
import { notFoundHandler } from './src/middlewares/notFoundHandler.js';
import { errorHandler } from './src/middlewares/errorHandler.js';

import comedoresRoutes from './src/routes/comedores.route.js';
import donadoresRoutes from './src/routes/donadores.route.js';
import entregasRoutes from './src/routes/entregas.route.js';
import productosRoutes from './src/routes/productos.route.js';
import migrationRoutes from './src/routes/migration.route.js';



const app = express();

// Middlewares base
app.use(cors());
app.use(express.json());

// Rutas de la API
app.use('/api/migration', migrationRoutes);
app.use('/api/donadores', donadoresRoutes);
app.use('/api/comedores', comedoresRoutes);
app.use('/api/productos', productosRoutes);
app.use('/api/entregas', entregasRoutes);

// Ruta simple de prueba / healthcheck
app.get('/', (req, res) => {
  res.json({ message: 'API funcionando' });
});

export default app;