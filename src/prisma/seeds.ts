import { PrismaClient, Prisma } from '../app/generated/prisma/client'
import { PrismaPg } from '@prisma/adapter-pg'
import 'dotenv/config'

const adapter = new PrismaPg({
    connectionString: process.env.DATABASE_URL,
});

const prisma = new PrismaClient({
    adapter,
});

const userData: Prisma.MembreCreateInput[] = [
    {
        prenom: "John",
        nom: "DOE",
        email: "john.doe@gmail.com",
        password: "password",
    },
    {
        nom: "DUPONT",
        prenom: "Jean",
        email: "jean.dupont@gmail.com",
        password: "password2"
    }
]

export async function main() {
    await prisma.membre.deleteMany()
    for (const m of userData) {
        await prisma.membre.create({ data: m });
    }
}

main();