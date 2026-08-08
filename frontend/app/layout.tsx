import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Import du fornt Playfair_Display
import { Playfair_Display } from 'next/font/google'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
  weight: ['400', '500', '600', '700']
})

export const metadata: Metadata = {
  title: "Orchestre d'Accordéon du Sundgau",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full font-serif flex flex-col min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">

          {/* Contenu des Pages */}
          {children}

        </main>
        <Footer />
      </body>
    </html>
  );
}
