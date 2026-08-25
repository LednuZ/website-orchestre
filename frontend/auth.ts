'use server'

import NextAuth from 'next-auth'
import Credentials from 'next-auth/providers/credentials'
import { prisma } from '@/lib/prisma'
import bcrypt from 'bcryptjs'

export const { handlers, auth, signIn, signOut } = NextAuth({
    providers: [
        Credentials({
            credentials: {
                email: { label: 'Email', type: 'email' },
                password: { label: 'Mot de passe', type: 'password' },
            },
            async authorize(credentials) {
                if (!credentials?.email || !credentials?.password) return null

                // 1. Chercher l'utilisateur en BDD
                const user = await prisma.membre.findUnique({
                    where: { email: credentials.email as string },
                })

                if (!user || !user.password) return null

                // 2. Vérifier le mot de passe haché
                const passwordsMatch = await bcrypt.compare(
                    credentials.password as string,
                    user.password
                )

                if (!passwordsMatch) return null

                return { id: user.id, name: user.nom, email: user.email }
            },
        }),
    ],
    session: { strategy: 'jwt' },
    pages: {
        signIn: '/login', // Redirection vers ta page de connexion personnalisée
    },
})