"use client"

import { useTransition } from "react"
import { supprimerFormulaire } from "./action"

interface BoutonSupprimerProps {
    id: number
}

export default function DeleteButton({ id }: BoutonSupprimerProps) {
    const [isPending, startTransition] = useTransition()

    const handleDelete = () => {
        const confirme = window.confirm(
            "Êtes-vous sûr de vouloir supprimer définitivement ce message ?"
        )

        if (!confirme) return

        startTransition(async () => {
            const result = await supprimerFormulaire(id)
            if (result?.error) {
                alert(result.error)
            }
        })
    }

    return (
        <button
            type="button"
            onClick={handleDelete}
            disabled={isPending}
            className="px-3 py-1 text-xs font-medium bg-red-700/80 text-white border border-red-200 rounded hover:bg-red-500 disabled:opacity-50 transition"
        >
            {isPending ? "Suppression..." : "Supprimer"}
        </button>
    )
}