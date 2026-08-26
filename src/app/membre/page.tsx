import Link from 'next/link'
import { getSessionUser } from '@/lib/auth'
import LogoutButton from '@/components/ui/LogoutButton'

export default async function Page() {
    const user = await getSessionUser()

    return (
        <div className='flex flex-col text-center'>
            <h1 className='mb-5'>Espace Membre</h1>
            {user ? (
                <div>
                    <h2>Bienvenue {user.prenom}</h2>
                    <div className='py-3'><LogoutButton /></div>

                    {user.admin &&
                        (
                            <div>
                                {/* Gestion des evenements */}

                                {/* Gestion des membres  */}

                                {/* Gestion des formulaires de contact */}
                                <Link href='/membre/admin/contact'></Link>

                            </div>
                        )
                    }

                </div>
            ) : (
                <div>
                    <Link href='/membre/connexion'>Se connecter</Link>
                </div >
            )
            }
        </div >

    )
}