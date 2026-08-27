"use server"

import { prisma } from '@/lib/prisma'
import { revalidatePath } from 'next/cache'

export async function marquerCommeLu(formId: number) {
    try {
        await prisma.contact.update({
            where: { id: formId },
            data: { lu: true },
        })

        // Rafraîchit les données de la page automatiquement
        revalidatePath("/membre/admin/contact")
        return { success: true }
    } catch (error) {
        console.error("Erreur lors de la mise à jour :", error)
        return { error: "Impossible de marquer le message comme lu." }
    }
}

export async function marquerCommeNonLu(formId: number) {
    try {
        await prisma.contact.update({
            where: { id: formId },
            data: { lu: false },
        })

        // Rafraîchit les données de la page automatiquement
        revalidatePath("/membre/admin/contact")
        return { success: true }
    } catch (error) {
        console.error("Erreur lors de la mise à jour :", error)
        return { error: "Impossible de marquer le message comme lu." }
    }
}