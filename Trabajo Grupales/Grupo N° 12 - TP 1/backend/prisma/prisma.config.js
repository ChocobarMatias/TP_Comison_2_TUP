// Configuración para que Prisma pueda leer las variables de entorno
// Este archivo permite que "npx prisma db pull" funcione correctamente
import 'dotenv/config';

export default {
  datasources: {
    db: {
      url: process.env.DATABASE_URL
    }
  }
};
