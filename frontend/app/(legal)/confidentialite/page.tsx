import Link from 'next/link'

export default function PolitiquedeConfidentialite() {
    return (
        <div className="px-4 py-12 space-y-8 text-foreground leading-relaxed">
            <h1 className="text-3xl font-bold text-primary">Politique de Confidentialité</h1>
            <p className="text-sm text-gray-600">Dernière mise à jour : Août 2026</p>

            {/* 1. Introduction */}
            <section className="space-y-3">
                <h2 className="text-xl font-bold text-secondary">1. Introduction</h2>
                <p>
                    L'association <strong>Orchestre d'Accordéon du Sundgau</strong> s'engage à protéger la vie privée des visiteurs de son site internet. La présente politique de confidentialité a pour but de vous informer en toute transparence sur la manière dont nous collectons, utilisons et protégeons vos données personnelles conformément au Règlement Général sur la Protection des Données (RGPD).
                </p>
            </section>

            {/* 2. Responsable du traitement */}
            <section className="space-y-3">
                <h2 className="text-xl font-bold text-secondary">2. Responsable du traitement des données</h2>
                <p>
                    Le responsable du traitement des données personnelles collectées sur le site est :<br />
                    <strong>Orchestre d'Accordéon du Sundgau</strong><br />
                    Adresse : [à compléter]<br />
                    Email de contact : <a href="mailto:info@accordeon-sundgau.com" className="text-primary underline">info@accordeon-sundgau.com</a><br />
                    Téléphone : [à compléter]
                </p>
            </section>

            {/* 3. Données collectées et finalités */}
            <section className="space-y-3">
                <h2 className="text-xl font-bold text-secondary">3. Données collectées et finalités</h2>
                <p>Nous sommes amenés à collecter vos données uniquement dans les situations suivantes :</p>
                <ul className="list-disc pl-6 space-y-2">
                    <li>
                        <strong>Formulaire de contact / réservation :</strong> Lorsque vous nous contactez, nous collectons votre nom, prénom, adresse e-mail et numéro de téléphone afin de pouvoir répondre à votre demande.
                    </li>
                    <li>
                        <strong>Navigation sur le site :</strong> Aucune donnée d'identification personnelle n'est collectée automatiquement lors de la simple consultation du site.
                    </li>
                </ul>
            </section>

            {/* 4. Durée de conservation */}
            <section className="space-y-3">
                <h2 className="text-xl font-bold text-secondary">4. Durée de conservation des données</h2>
                <p>
                    Vos données personnelles sont conservées uniquement pendant la durée nécessaire au traitement de votre demande :
                </p>
                <ul className="list-disc pl-6 space-y-1">
                    <li><strong>Demandes de contact / réservations :</strong> 3 ans maximum à compter du dernier contact de votre part.</li>
                </ul>
            </section>

            {/* 5. Partage des données */}
            <section className="space-y-3">
                <h2 className="text-xl font-bold text-secondary">5. Partage et transfert des données</h2>
                <p>
                    L'Orchestre d'Accordéon du Sundgau <strong>ne vend, ne loue et ne cède aucune de vos données personnelles à des tiers</strong> à des fins commerciales. Les données sont strictement réservées à l'usage interne de l'association.
                </p>
            </section>

            {/* 6. Vos droits */}
            <section className="space-y-3">
                <h2 className="text-xl font-bold text-secondary">6. Vos droits concernant vos données (RGPD)</h2>
                <p>Conformément à la réglementation en vigueur, vous disposez des droits suivants :</p>
                <ul className="list-disc pl-6 space-y-1">
                    <li><strong>Droit d'accès :</strong> Obtenir la confirmation que vos données sont traitées et en recevoir une copie.</li>
                    <li><strong>Droit de rectification :</strong> Demander la correction de données inexactes ou incomplètes.</li>
                    <li><strong>Droit à l'effacement (droit à l'oubli) :</strong> Demander la suppression de vos données personnelles.</li>
                </ul>
                <p className="pt-2">
                    Pour exercer ces droits, il vous suffit d'envoyer un e-mail à :{' '}
                    <a href="mailto:info@accordeon-sundgau.com" className="text-primary underline font-medium">
                        info@accordeon-sundgau.com
                    </a>.
                </p>
            </section>

            {/* 7. Cookies */}
            <section className="space-y-3">
                <h2 className="text-xl font-bold text-secondary">7. Gestion des cookies</h2>
                <p>
                    Ce site utilise uniquement des cookies techniques strictement nécessaires au bon fonctionnement de la plateforme (Next.js). Aucun cookie de suivi publicitaire ou de profilage tiers n'est déposé sur votre navigateur.
                </p>
            </section>

            {/* Retour aux mentions légales */}
            <div className="pt-6 border-t border-gray-200">
                <Link href="/mentions-legales" className="text-primary font-medium hover:underline">
                    ← Consulter également les mentions légales
                </Link>
            </div>
        </div>
    )
}