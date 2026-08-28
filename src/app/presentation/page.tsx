export default function Page() {
    return (
        <div>
            {/* Titre */}
            <h1 className="text-[50px] text-primary font-extrabold py-5">Présentation</h1>

            {/* Contenu */}
            <div className="font-large text-white space-y-10 pt-5 text-justify" >
                {SECTIONS.map((section) => (
                    <section key={section.id} id={section.id}
                        className="scroll-mt-25 space-y-3 px-30 py-10 bg-primary-box rounded-3xl">
                        <h2 className="font-extrabold text-2xl p-auto ">
                            {section.title}
                        </h2>
                        <div>
                            {section.paragraphs.map((parag, index) => (
                                <p key={index} className="mt-3">
                                    {parag}
                                </p>
                            ))}
                        </div>
                    </section>

                ))}
            </div>
        </div>
    )
}


// TODO : Vérifier les coordonées

const SECTIONS = [
    {
        id: 'oas',
        label: "Orchestre d'Accordéon",
        title: "Orchestre d'Accordéon du Sundgau",
        paragraphs: [
            "L'Orchestre d'Accordéon du Sundgau, placé sous la direction de Philippe REY, est un ensemble instrumental composé d'accordéons associés à d'autres instruments (de la guitare basse, des claviers, des flûtes traversières, des cuivres et des percussions).",
            "Afin de faire mieux connaître l’accordéon et la richesse de son timbre, l’Orchestre d’Accordéon du Sundgau s’est doté au fil des années d’un répertoire original et éclectique. Ce répertoire permet de présenter au public tant des œuvres classiques que des pièces de jazz, ou de la musique de divertissement avec des hommages à la chanson française.",
            "L'originalité de son répertoire repose également sur des œuvres de différents styles écrites ou arrangées tout spécialement pour l'orchestre. Ce programme musical permet à l'orchestre de s'associer à des musiciens de grande renommée (Gillian Macdonald, Henryk Polus, Patrice Buecher, Frédéric Deschamps, Jérôme Richard, Alexandre Dmitriev...).",
            "Outre les manifestations organisées par l'orchestre, ce dernier est régulièrement sollicité pour des concerts dans l'hexagone et à l'étranger (Russie, Croatie, Allemagne, Italie, Pays-Bas, Irlande).",
            "L'orchestre a enregistré quatre CD et s'est distingué lors de concours internationaux majeurs comme ceux de Castelfidardo en Italie et Pula en Croatie.",
            "L'orchestre s'illustre également à travers de grands spectacles thématiques : « Philomé ou l’Arbre de Vie » (2007), le projet du 50ème anniversaire « Appassionata » (Carmina Burana avec 120 choristes), « Par-delà les tranchées » (2018), le FIMU de Belfort (2022) et la tournée des cathédrales « Des cathédrales et des Hommes » (2022) ayant réuni plus de 3 000 spectateurs."
        ]
    },
    {
        id: 'odj',
        label: "Orchestre des Jeunes",
        title: "Orchestre des Jeunes",
        paragraphs: [
            "L'orchestre des jeunes est composé de 15 musiciens dynamiques. Il regroupe des accordéonistes, des pianistes et des percussionnistes. L'orchestre est actuellement dirigé par Jérémie REY et Quentin REY.",
            "Un répertoire varié permet à ces jeunes d'apprendre à jouer ensemble des œuvres variées dont certaines tirées de la chanson française, anglaise, ou encore des musiques de films ou des thèmes irlandais.",
            "Ces jeunes musiciens motivés et de tous niveaux peuvent ensuite intégrer l'orchestre d'accordéon du Sundgau pour persévérer dans la musique d'ensemble et y découvrir un autre répertoire.",
            "L'orchestre se produit lors de différentes manifestations, parfois seul, parfois en première partie de l'orchestre d'accordéon du Sundgau."
        ]
    },
    {
        id: 'edm',
        label: "École de Musique",
        title: "École de Musique",
        paragraphs: [
            "Notre école de musique propose des cours d'accordéon, de guitare et de piano. Les inscriptions sont ouvertes.",
            "Contact : info@accordeon-sundgau.com | Tél. : 06 80 85 68 60"
        ]
    }
]