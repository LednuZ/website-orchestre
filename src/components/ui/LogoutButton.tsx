'use client'

import { useRouter } from "next/navigation"

export default function LogoutButton() {
    const router = useRouter()
    const handleLogout = async () => {
        await fetch("/api/logout", { method: 'POST' })

        router.refresh()

        router.push("/membre/connexion")
    }

    return (
        <button
            onClick={handleLogout}
            className="px-3 py-1 bg-primary text-medium text-white rounded hover:bg-primary/90 transition"
        >
            Se déconnecter
        </button>
    )
}