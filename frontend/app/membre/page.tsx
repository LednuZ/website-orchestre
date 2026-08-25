import { prisma } from '@/lib/prisma'

export default async function Page() {
    const membres = await prisma.membre.findMany();
    return (
        <div>
            <h1>Page Membre</h1>
            Test
            <ol>
                {membres.map((membre) => (
                    <li key={membre.id}>
                        {membre.nom} {membre.prenom}
                    </li>
                ))
                }
            </ol>
        </div>

    )
}