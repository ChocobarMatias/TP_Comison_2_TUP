// const {PrismaClient} = require ('@prisma/client')

// const prisma = new PrismaClient();
// module.exports={prisma};





// src/config/prisma.js
import { PrismaClient } from '@prisma/client';

const globalForPrisma = globalThis;
const prisma = globalForPrisma.prisma || new PrismaClient();

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;

export default prisma;
