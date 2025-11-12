const { PrismaClient } = require('@prisma/client');

// Instancia única de Prisma Client usada por la aplicación
const prisma = new PrismaClient();

module.exports = prisma;