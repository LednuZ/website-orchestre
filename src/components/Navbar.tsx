'use client'

import Link from 'next/link'
import { useState } from 'react'
import { usePathname } from 'next/navigation'

const navLinks = [
    { name: "Accueil", href: '/' },
    { name: "Présentation", href: '/presentation' },
    { name: "Concerts", href: '/concerts' },
    { name: "Archives", href: '/archives' },
    { name: "Contact", href: '/contact' },
    { name: "Espace Membres", href: '/membre' },
]


export default function Navbar() {
    const pathname = usePathname()
    const [isOpen, setIsOpen] = useState(false)

    return (
        <header className="sticky top-0 z-50 relative w-full shadow-sm bg-background/95 backdrop-blur-md" >
            <div className="mx-auto flex max-w-7xl items-center justify-between px-3 py-4 sm:px-4 lg:px-5">

                {/* Titre */}
                <Link href="/" className="text-2xl text-primary font-bold tracking-tight">
                    <span>Orchestre d'Accordéon du Sundgau</span>
                </Link>

                {/* Navigation Desktop */}
                <nav className="hidden space-x-6 md:flex">
                    {navLinks.map((link) => {
                        const isActive = pathname === link.href
                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`text-sm text-primary transition-colors hover:opacity-60 ${isActive ? 'underline underline-offset-12 font-extrabold align-super' : 'font-medium'
                                    }`}
                            >
                                {link.name}
                            </Link>
                        )
                    })}
                </nav>

                {/* Bouton Menu Mobile */}
                <button
                    type="button"
                    onClick={() => setIsOpen(!isOpen)}
                    className="rounded-lg p-2 text-primary hover:bg-primary/5 active:bg-primary/10 transition-colors md:hidden focus:outline-none"
                    aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
                    aria-expanded={isOpen}
                >
                    <svg
                        className="h-6 w-6 transition-transform duration-200"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        {isOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>

                {/* Navigation Mobile (Menu déroulant stylisé) */}
                {isOpen && (
                    <nav className="border-t border-primary/10 bg-background/95 backdrop-blur-md px-4 py-4 md:hidden shadow-lg animate-in slide-in-from-top-2 duration-200 absolute top-full left-0 right-0">
                        <div className="flex flex-col space-y-2">
                            {navLinks.map((link) => {
                                const isActive = pathname === link.href
                                return (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        onClick={() => setIsOpen(false)}
                                        className={`px-4 py-3 rounded-lg text-base transition-all flex items-center justify-between ${isActive
                                            ? 'bg-primary text-on-primary font-bold shadow-sm'
                                            : 'text-foreground hover:bg-primary/5 font-medium'
                                            }`}
                                    >
                                        <span>{link.name}</span>
                                        {/* Flèche discrète à droite pour donner un effet de carte cliquable */}
                                        <span className={`text-xs ${isActive ? 'text-on-primary' : 'text-gray-400'}`}>
                                            →
                                        </span>
                                    </Link>
                                )
                            })}
                        </div>
                    </nav>
                )}
            </div>
        </header>
    )
}