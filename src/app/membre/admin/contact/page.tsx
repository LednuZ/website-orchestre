import { prisma } from '@/lib/prisma'
import Link from 'next/link'

const ITEMS_PER_PAGE = 10

interface PageProps {
    searchParams: Promise<{ page?: string }>
}

export default async function AdminContactPage({ searchParams }: PageProps) {
    const params = await searchParams
    const currentPage = Number(params.page) || 1

    const totalContacts = await prisma.contact.count()
    const totalPages = Math.ceil(totalContacts / ITEMS_PER_PAGE)

    const forms = await prisma.contact.findMany({
        take: ITEMS_PER_PAGE,
        skip: (currentPage - 1) * ITEMS_PER_PAGE,
        orderBy: { createdAt: "desc" },
    })

    return (
        <div>
            <h1>Gestion des formulaires de contact</h1>
            <ul className='flex flex-col'>
                {forms.map((form) => (
                    <li key={form.id} className={`${!form.lu ? "bg-primary/90" : "bg-secondary"}  m-5 p-5 rounded text-white`}>
                        <div className='flex flex-row gap-2 justify-between items-center'>
                            <span className='font-semibold'>{form.nom}</span>
                            <span>{form.email}</span>
                            <span>{form.createdAt.toLocaleDateString('fr-FR', {
                                day: '2-digit',
                                month: '2-digit',
                                year: 'numeric',
                                hour: '2-digit',
                                minute: '2-digit',
                            })}
                            </span>
                        </div>
                        <span className='bg-white rounded text-black block mt-5 p-3'>{form.message}</span>
                        <div className='mt-3'>
                            Ici mettre marquer comme lu et supprimer message
                        </div>
                    </li>
                ))}
            </ul>

            {/* Choix des pages de formulaire de contact */}
            {
                totalPages > 1 && (
                    <div className="flex justify-between items-center pt-4 border-t">
                        <Link
                            href={`/membre/admin/contact?page=${currentPage - 1}`}
                            className={`px-4 py-2 text-sm border rounded ${currentPage <= 1
                                ? "pointer-events-none opacity-40 bg-gray-100"
                                : "hover:bg-gray-50"
                                }`}
                        >
                            Précédent
                        </Link>

                        <span className="text-sm text-gray-600">
                            Page {currentPage} sur {totalPages}
                        </span>

                        <Link
                            href={`/membre/admin/contact?page=${currentPage + 1}`}
                            className={`px-4 py-2 text-sm border rounded ${currentPage >= totalPages
                                ? "pointer-events-none opacity-40 bg-gray-100"
                                : "hover:bg-gray-50"
                                }`}
                        >
                            Suivant
                        </Link>
                    </div>
                )
            }
        </div >
    )
}