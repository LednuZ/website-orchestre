'use client'

import Link from 'next/link'
import { useState } from 'react'
import { usePathname } from 'next/navigation'

const navLinks = [
    { name: "Accueil", href: '/' },
    { name: "Présentation", href: '/presentation' },
    { name: "Dates", href: '/dates' },
    { name: "Archives", href: '/archives' },
    { name: "Contact", href: '/contact' },
    { name: "Espace Membres", href: '/membre' },
]


export default function Navbar() {
    const pathname = usePathname()
    const [isOpen, setIsOpen] = useState(false)

    return (
        <header className="sticky top-0 z-50 w-full shadow-sm bg-background/95 backdrop-blur" >
            <div className="mx-auto flex max-w-7xl items-center justify-between px-3 py-3 sm:px-4 lg:px-5">

                {/* Logo */}
                <Link href="/" className="text-2xl text-primary font-bold tracking-tight">
                    <span className="text-primary">Orchestre d'Accordéon du Sundgau</span>
                </Link>

                {/* Navigation Desktop */}
                <nav className="hidden space-x-6 md:flex">
                    {navLinks.map((link) => {
                        const isActive = pathname === link.href
                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`text-sm text-primary transition-colors hover: ${isActive ? 'underline underline-offset-12 font-extrabold align-super' : 'font-medium'
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
                    className="rounded-md p-2 text-gray-600 hover:bg-gray-100 md:hidden"
                    aria-label="Ouvrir le menu"
                >
                    <svg
                        className="h-6 w-6"
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
            </div>

            {/* Navigation Mobile */}
            {
                isOpen && (
                    <nav className="border-t px-4 pb-4 pt-2 md:hidden">
                        <div className="flex flex-col space-y-3">
                            {navLinks.map((link) => {
                                const isActive = pathname === link.href
                                return (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        onClick={() => setIsOpen(false)}
                                        className={`text-sm font-medium transition-colors hover:text-blue-600 ${isActive ? 'font-semibold text-blue-600' : 'text-gray-600'
                                            }`}
                                    >
                                        {link.name}
                                    </Link>
                                )
                            })}
                        </div>
                    </nav>
                )
            }
        </header>
    )
}