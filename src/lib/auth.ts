import { cookies } from 'next/headers'
import { jwtVerify } from 'jose'
import { prisma } from '@/lib/prisma'

const JWT_SECRET = new TextEncoder().encode(process.env.JWT_SECRET)

export async function getSessionUser() {
    try {
        const cookieStore = await cookies()
        const token = cookieStore.get('auth_token')?.value

        if (!token) return null

        const { payload } = await jwtVerify(token, JWT_SECRET)

        const userId = payload.id as number

        const user = await prisma.membre.findUnique({
            where: { id: userId },
            select: {
                id: true,
                nom: true,
                prenom: true,
                email: true,
                admin: true,
                verif: true,
            },
        })

        return user
    } catch (error) {
        return null
    }
}