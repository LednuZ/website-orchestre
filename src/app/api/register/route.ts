import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"
import bcrypt from "bcryptjs"

export async function POST(request: Request) {
    try {
        const body = await request.json()
        const { email, nom, prenom, password, passwordVerif } = body

        if (!email || !nom || !prenom || !password || !passwordVerif) {
            return NextResponse.json(
                { error: 'Toutes les entrées doivent être remplies.' },
                { status: 400 }// Bad Request
            )
        }

        if (password !== passwordVerif) {
            return NextResponse.json(
                { error: 'Les deux mots de passe ne sont pas identiques.' },
                { status: 400 } // Bad request
            )
        }

        const membre = await prisma.membre.findUnique({
            where: { email },
        })

        if (membre) {
            return NextResponse.json(
                { error: 'Email déjà utilisé.' },
                { status: 400 } // Bad request
            )
        }

        const hashedPassword = await bcrypt.hash(password, 10)

        const newMembre = await prisma.membre.create({
            data: {
                nom,
                prenom,
                email,
                password: hashedPassword,
            },
        })

        if (!newMembre) {
            return NextResponse.json(
                { error: "Echec lors de l'entrée dans la BDD" },
                { status: 501 }
            )
        }

        const response = await fetch('/api/login',
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password }),
            })

        const data = await response.json()

        if (!response.ok) {
            return NextResponse.json({
                message: "Inscription réussie.",
                membre: {
                    id: data.membre.id,
                    nom: data.membre.nom,
                    prenom: data.membre.prenom,
                    verif: data.membre.verif,
                    admin: data.membre.admin,
                }
            })
        } else {
            return NextResponse.json({
                error: "Erreur lors de la connexion"
            },
                { status: 501 },
            )
        }


    }
    catch (error) {
        console.error('Erreur lors de la connexion :', error)
        return NextResponse.json(
            { error: 'Erreur interne du serveur.' },
            { status: 500 }
        )
    }
}