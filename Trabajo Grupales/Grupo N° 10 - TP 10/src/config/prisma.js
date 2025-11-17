import { PrismaClient } from '@prisma/client';

// Creamos una instancia global de PrismaClient
// ¡Esta es la variable que nos da todos los superpoderes!
const prisma = new PrismaClient();

// Exportamos la instancia para usarla en todos nuestros controladores
export default prisma;