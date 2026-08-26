import { NextResponse } from "next/server"
import { cookies } from 'next/headers'
import { prisma } from '@/lib/prisma'
import bcrypt from "bcryptjs"
import { SignJWT } from 'jose'

const JWT_SECRET = new TextEncoder().encode(process.env.JWT_SECRET)

export async function POST(request: Request) {
    try {
        const body = await request.json()
        const { email, password } = body

        if (!email || !password) {
            return NextResponse.json(
                { error: "Email ET mot de passe requis." },
                { status: 400 } // Bad request
            )
        }

        const cleanEmail = email?.trim().toLowerCase()

        const membre = await prisma.membre.findUnique({
            where: { email: cleanEmail },
        })

        if (!membre) {
            return NextResponse.json(
                { error: "Identifiants invalides." },
                { status: 401 } // Unauthorized
            )
        }

        const passwordMatch = await bcrypt.compare(password, membre.password)

        if (!passwordMatch) {
            return NextResponse.json(
                { error: "Identifiants invalides." },
                { status: 401 } // Unauthorized
            )
        }

        const token = await new SignJWT({ id: membre.id, email: membre.email })
            .setProtectedHeader({ alg: 'HS256' })
            .setExpirationTime('30d')
            .sign(JWT_SECRET)

        const cookieStore = await cookies()
        cookieStore.set('token', token, {
            httpOnly: true, // Inaccessible depuis JavaScript 
            secure: process.env.NODE_ENV === 'production', // Uniquement sur HTTPS en prod
            sameSite: 'lax', // Protection CSRF
            maxAge: 60 * 60 * 24 * 30, // Expiration : 30 jours en secondes
            path: '/',
        })

        return NextResponse.json({
            message: 'Connexion réussie.',
            membre: {
                id: membre.id,
                email: membre.email,
                nom: membre.nom,
                prenom: membre.prenom,
                verif: membre.verif,
                admin: membre.admin,
            },
        }
        )

    }
    catch (error) {
        console.error('Erreur lors de la connexion :', error)
        return NextResponse.json(
            { error: 'Erreur interne du serveur.' },
            { status: 500 }
        )
    }
}