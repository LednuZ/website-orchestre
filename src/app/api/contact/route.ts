import { NextResponse } from "next/server"
import { prisma } from '@/lib/prisma'

export async function POST(request: Request) {
    try {
        const body = await request.json()
        const { email, nom, message } = body

        if (!email || !nom || !message) {
            return NextResponse.json({
                error: "Tous les champs sont requis."
            },
                {
                    status: 400
                })
        }

        const newContact = await prisma.contact.create(
            {
                data:
                {
                    email,
                    nom,
                    message,
                }
            }
        )

        return NextResponse.json({
            message:
                'Message envoyé'
        })
    }
    catch (error) {
        console.log('Erreur lors de l\'envoi du formulaire :', error)
        return NextResponse.json(
            { error: 'Erreur interne du serveur.' },
            { status: 500 }
        )
    }
}