"use server"

import { prisma } from '@/lib/prisma'
import { revalidatePath } from 'next/cache'

export async function changerStatutLu(formId: number, nouveauStatut: boolean) {
    try {
        await prisma.contact.update({
            where: { id: formId },
            data: { lu: nouveauStatut },
        })

        // Rafraîchit les données de la page automatiquement
        revalidatePath("/membre/admin/contact")
        return { success: true }
    } catch (error) {
        console.error("Erreur lors de la mise à jour :", error)
        return { error: "Impossible de marquer le message comme lu." }
    }
}


export async function supprimerFormulaire(formId: number) {
    try {
        await prisma.contact.delete({
            where: { id: formId }
        })

        revalidatePath("/membre/admin/contact")
        return { success: true }
    }
    catch (error) {
        console.error("Erreur lors de la suppression :", error)
        return { error: "Impossible de supprimer le message." }
    }
}