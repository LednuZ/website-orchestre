'use client'

import { useState } from "react"

export default function ContactForm() {
    const [email, setEmail] = useState('')
    const [nom, setNom] = useState('')
    const [message, setMessage] = useState('')
    const [feedback, setFeedback] = useState('')

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        try {
            const response = await fetch("/api/contact",
                {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ email, nom, message }),
                }
            )

            const data = await response.json()

            if (!response.ok) {
                setFeedback(`Erreur : ${data.error}`)
            } else {
                setFeedback(`Formulaire de contact envoyé avec succès.`)
                setEmail('')
                setNom('')
                setMessage('')
            }
        }
        catch (error) {
            console.error("Erreur réseau :", error)
            setFeedback("Erreur de connexion au serveur.")
        }
    }

    return (
        <div className='text-center'>
            <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
                <input className="p-1 rounded border" type="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} required />
                <input className="p-1 rounded border" type="text" placeholder='Nom' value={nom} onChange={(e) => setNom(e.target.value)} required />
                <textarea className="p-1 rounded border" placeholder='Message' value={message} onChange={(e) => setMessage(e.target.value)} required />
                <button className="p-1 rounded border font-bold hover:text-primary hover:bg-secondary/10" type="submit">Envoyer le message</button>
                {feedback && <p>{feedback}</p>}
            </form>
        </div>
    )
}