export default function MentionsLegales() {
    return (
        <div className="px-4 space-y-8 text-foreground">
            <h1>Mentions Légales</h1>

            {/* 1. Éditeur */}
            <section className="space-y-2">
                <h2 className="text-xl font-bold text-secondary">1. Éditeur du site</h2>
                <p>
                    Le site est édité par l'association <strong>Orchestre d'Accordéon du Sundgau</strong>.<br />
                    Siège social : [à compléter]<br />
                    Email : [à compléter]<br />
                    Téléphone : [à compléter]<br />
                    Directeur de la publication : [à compléter]
                </p>
            </section>

            {/* 2. Hébergeur */}
            <section className="space-y-2">
                <h2 className="text-xl font-bold text-secondary">2. Hébergement</h2>
                <p>
                    Ce site est hébergé par <strong>[à compléter]</strong><br />
                    Adresse : [à compléter]<br />
                    Site web : [à compléter]
                </p>
            </section>

            {/* 3. Propriété intellectuelle */}
            <section className="space-y-2">
                <h2 className="text-xl font-bold text-secondary">3. Propriété intellectuelle</h2>
                <p>
                    L'ensemble des contenus (textes, images, photographies, sons) présents sur ce site est la propriété exclusive de l'Orchestre d'Accordéon du Sundgau, sauf mention contraire. Toute reproduction ou représentation totale ou partielle est interdite sans autorisation préalable.
                </p>
                <p className="text-sm text-gray-600">
                    Crédits photos : [à compléter]
                </p>
            </section>

            {/* 4. Données personnelles */}
            <section className="space-y-2">
                <h2 className="text-xl font-bold text-secondary">4. Protection des données (RGPD)</h2>
                <p>
                    Les informations recueillies via le formulaire de contact sont destinées exclusivement au traitement de vos demandes. Conformément au RGPD, vous disposez d'un droit d'accès, de rectification et de suppression de vos données en nous contactant par email.
                </p>
            </section>
        </div>
    )
}