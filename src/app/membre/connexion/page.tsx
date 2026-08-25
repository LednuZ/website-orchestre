'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function Page() {
    const router = useRouter()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [message, setMessage] = useState('')

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        // Envoi de la requête à l'API
        const response = await fetch("/api/login", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password }),
        })

        const data = await response.json()

        if (!response.ok) {
            setMessage(`Erreur : ${data.error}`)
        } else {
            setMessage(`Bienvenue ${data.membre.prenom} `)
            router.push("/membre")
        }
    }

    return (
        <div className='flex flex-col max-w-md mx-auto'>

            <h1 className="text-center pb-5">Connexion</h1>

            <div className='text-center'>
                <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
                    <input className="p-1 rounded border" type="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} required />
                    <input className="p-1 rounded border" type="password" placeholder='Mot de passe' value={password} onChange={(e) => setPassword(e.target.value)} required />
                    <button className="p-1 rounded border font-bold hover:text-primary hover:bg-secondary/10" type="submit">Se connecter</button>
                    {message && <p>{message}</p>}
                </form>
                <Link className="inline-block mt-5 text-primary font-medium hover:font-bold" href='/membre/inscription'>S'inscrire</Link>

            </div>
        </div>
    )
}