/**
 * Configuración centralizada del cliente Prisma
 * Este archivo exporta una única instancia de PrismaClient
 * para ser utilizada en todos los controladores
 */

import { PrismaClient } from '@prisma/client';

// Crear instancia única del cliente Prisma
const prisma = new PrismaClient({
  log: ['query', 'info', 'warn', 'error'], // Logging para desarrollo
});

// Manejar desconexión al cerrar la aplicación
process.on('beforeExit', async () => {
  await prisma.$disconnect();
});

export default prisma;
