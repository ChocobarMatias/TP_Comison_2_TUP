// backend/src/config/DB.js
import { PrismaClient } from '@prisma/client';

// Instancia única del cliente de Prisma
const prisma = new PrismaClient();

// Exportamos la instancia de Prisma
export default prisma;