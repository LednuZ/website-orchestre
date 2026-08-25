'use client'

import { useState } from "react"
import Link from "next/link"
import { useRouter } from 'next/navigation'

export default function Page() {
    const router = useRouter()

    const [email, setEmail] = useState('')
    const [nom, setNom] = useState('')
    const [prenom, setPrenom] = useState('')
    const [password, setPassword] = useState('')
    const [passwordVerif, setPasswordVerif] = useState('')
    const [message, setMessage] = useState('')

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        if (password !== passwordVerif) {
            setMessage('Erreur : Les deux mots de passe ne sont pas identiques.')
            return // Bloque la suite de la fonction
        }

        setMessage('')

        try {
            const response = await fetch('/api/register', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(
                    { email, nom, prenom, password, passwordVerif }
                ),
            })

            const data = await response.json()

            if (!response.ok) {
                setMessage(`Erreur : ${data.error}`)
            } else {
                setMessage(`Bienvenue ${data.membre.prenom} `)
                router.push("/membre")
            }
        }
        catch (error) {
            setMessage('Une erreur s\'est produite lors de l\'inscription.')
        }
    }

    return (
        <div className='flex flex-col max-w-md mx-auto'>

            <h1 className="text-center pb-5">S'inscrire</h1>

            <div className='text-center'>
                <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
                    <input className="p-1 rounded border" type="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} required />
                    <input className="p-1 rounded border" type="text" placeholder='Nom' value={nom} onChange={(e) => setNom(e.target.value)} required />
                    <input className="p-1 rounded border" type="text" placeholder='Prenom' value={prenom} onChange={(e) => setPrenom(e.target.value)} required />
                    <input className="p-1 rounded border" type="password" placeholder='Mot de passe' value={password} onChange={(e) => setPassword(e.target.value)} required />
                    <input className="p-1 rounded border" type="password" placeholder='Confirmer mot de passe' value={passwordVerif} onChange={(e) => setPasswordVerif(e.target.value)} required />
                    <button className="p-1 rounded border font-bold hover:text-primary hover:bg-secondary/10" type="submit">S'inscrire</button>
                    {message && <p>{message}</p>}
                </form>
                <Link className="inline-block mt-5 text-primary font-medium hover:font-bold" href='/membre/connexion'>Se connecter</Link>

            </div>
        </div>
    )
}