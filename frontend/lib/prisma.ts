import { Pool } from 'pg'
import { PrismaClient } from "../app/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { Prisma } from '@prisma/client/extension';

const connectionString = process.env.DATABASE_URL

if (!connectionString) {
    console.error("CRITIQUE : DATABASE_URL n'est pas définie dans l'environnement !")
}

const pool = new Pool({ connectionString })

const adapter = new PrismaPg(pool);

const globalForPrisma = globalThis as unknown as {
    prisma: PrismaClient | undefined;
};
export const prisma =
    globalForPrisma.prisma ??
    new PrismaClient({ adapter })
    
if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;