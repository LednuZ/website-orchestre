import Link from "next/link"

export default function Footer() {
    return (
        <footer className="bg-tertiary text-on-tertiary mt-15 shadow-sm">
            {/* Contenu principal du Footer */}
            <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">

                {/* Colonne 1 : Nom & Description */}
                <div className="space-y-4">
                    <h3 className="text-xl font-bold text-primary">
                        Orchestre d'Accordéon du Sundgau
                    </h3>
                    <p className="text-sm text-on-tertiary leading-relaxed font-normal">
                        Ensemble instrumental placé sous la direction de Philippe REY. Une aventure musicale unique entre passion, virtuosité et partage.
                    </p>
                </div>

                {/* Colonne 2 : Navigation Rapide */}
                <div className="space-y-3">
                    <h4 className="text-base font-bold text-secondary uppercase tracking-wider">
                        Navigation
                    </h4>
                    <ul className="space-y-2 text-sm font-normal">
                        <li>
                            <Link href="/" className="hover:text-secondary transition-colors">
                                Accueil
                            </Link>
                        </li>
                        <li>
                            <Link href="/presentation" className="hover:text-secondary transition-colors">
                                L'Orchestre
                            </Link>
                        </li>
                        <li>
                            <Link href="/concerts" className="hover:text-secondary transition-colors">
                                Programmation & Concerts
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact" className="hover:text-secondary transition-colors">
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Colonne 3 : Contact & Infos */}
                <div className="space-y-3">
                    <h4 className="text-base font-bold text-secondary uppercase tracking-wider">
                        Contact
                    </h4>
                    <p className="text-sm text-on-secondary leading-relaxed font-normal">
                        <strong>Direction :</strong> Philippe REY<br />
                        <strong>Région :</strong> Sundgau / Alsace<br />
                        <strong>Email :</strong> contact@orchestre-sundgau.fr
                    </p>
                </div>

            </div>

            {/* Barre de copyright en bas */}
            <div className="border-t border-white/10 py-6 text-center text-xs text-gray-400 font-normal">
                <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4">
                    <p>© {new Date().getFullYear()} Orchestre d'Accordéon du Sundgau. Tous droits réservés.</p>
                    <div className="flex gap-4">
                        <Link href="/mentions-legales" className="hover:underline">
                            Mentions Légales
                        </Link>
                        <Link href="/confidentialite" className="hover:underline">
                            Politique de confidentialité
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}