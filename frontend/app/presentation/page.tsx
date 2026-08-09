export default function Page() {
    return (
        <div>
            {/* Titre */}
            <h1 className="text-[50px] text-primary font-extrabold pl-30 pt-5">Présentation</h1>
            {/* Barre de "navigation" pour avoir un visuel sur les autres catégories */}
            <div>

            </div>

            {/* Contenu */}
            <div className="text-black space-y-10 pt-10" >
                {SECTIONS.map((section) => (
                    <section key={section.id} id={section.id}
                        className="scroll-mt-25 space-y-3 space-">
                        <h2 className="text-primary text-xl">
                            {section.title}
                        </h2>
                        <div>
                            {section.paragraphs.map((parag, index) => (
                                <p key={index}>
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

// function OAS() {
//     return (
//         <div>
//             <h2 className="text-secondary font-medium text-2xl pt-10 pb-5">
//                 Orchestre d'Accordéon du Sundgau
//             </h2>
//             <p>
//                 L'Orchestre d'Accordéon du Sundgau, placé sous la direction de Philippe REY, est un ensemble instrumental composé d'accordéons associés à d'autres instruments (de la guitare basse, des claviers, des flûtes traversières, des cuivres et des percussions).
//             </p>
//             <p>
//                 Afin de faire mieux connaître l’accordéon et la richesse de son timbre, l’Orchestre d’Accordéon du Sundgau s’est doté au fil des années d’un répertoire original et éclectique. Ce répertoire permet de présenter au public tant des œuvres classiques que des pièces de jazz, ou de la musique de divertissement avec des hommages à la chanson française.
//             </p>
//             <p>
//                 L'originalité de son répertoire repose également sur des œuvres de différents styles écrites ou arrangées tout spécialement pour l'orchestre. Ce programme musical permet à l'orchestre de s'associer à des musiciens de grande renommée. L’orchestre a ainsi donné des concerts avec Gillian Macdonald (soprano à l’Opéra de Bâle), Henryk Polus (directeur du chœur de l’Opéra de Bâle), Patrice Buecher (tromboniste solo à l’Orchestre National de Radio France, Frédéric Deschamps, Jérôme Richard et Alexandre Dmitriev (virtuoses de l’accordéon). Le mariage de l'accordéon avec le chant et d'autres instruments donne une couleur supplémentaire au répertoire et offre un authentique voyage musical. L’orchestre a partagé la scène avec le Chœur d’hommes Liederkranz, le groupe vocal Turbulence, la chorale Arpège, le chœur d’hommes Concordia de Blotzheim, le chœur d’hommes de Hésingue, etc.
//             </p>
//             <p>
//                 Outre les manifestations organisées par l'orchestre, ce dernier est régulièrement sollicité pour des concerts dans l'hexagone et à l'étranger (Russie, Croatie, Allemagne, Italie, Pays-Bas, Irlande).
//             </p>
//             <p>
//                 L'orchestre a enregistré quatre CD et a participé à des concours internationaux. Il s'est distingué au concours international de Castelfidardo en Italie et Pula en Croatie ; concours de référence dans le monde de l'accordéon.
//             </p>
//             <p>
//                 En 2007, l’orchestre a participé au spectacle « Philomé ou l’Arbre de Vie » réunissant 150 musiciens, chœurs, danseurs et acteurs et notre directeur, Philippe Rey, a assuré la direction musicale.
//             </p>
//             <p>
//                 Dans le cadre de son 50ème anniversaire, l’association a monté un projet intergénérationnel d’une des œuvres les plus connues de l’art lyrique « Appassionata », extraits de Carmina Burana de Carl Orff, réunissant les musiciens de l’orchestre et 120 choristes amateurs (Ensemble vocal Arpège, Chœur d’Hommes Liederkranz et groupe vocal Turbulence). Les 7 concerts donnés à cette occasion ont rassemblé plus de 3.300 spectateurs. Une aventure musicale impressionnante et une ferveur populaire dépassant toutes leurs attentes.
//             </p>
//             <p>
//                 L’orchestre a participé en novembre 2018 au spectacle « Par-delà les tranchées », une création originale et une œuvre musicale et poétique inédite pour commémorer la première Guerre Mondiale. Sous la houlette de l’orchestre d’accordéon du Sundgau, du chœur d’hommes Concordia de Blotzheim, du conteur Henri Fritsch, de la soprane Béatrice Dunoyer et de l’ensemble Zipfelkapp, ce spectacle évoque les sombres aspects du conflit avec les textes de Cinthia Lang. Il a obtenu un franc succès auprès du public venu nombreux.
//             </p>
//             Le week-end de la Pentecôte 2022, l’orchestre a eu le privilège de participer par deux prestations au FIMU (Festival International de Musique Universitaire) à Belfort. Un concert exceptionnel a eu lieu dans la Cathédrale Saint-Christophe à guichet fermé.
//             <p>
//             </p>
//             <p>
//                 En fin d'année 2022, l'orchestre a donné avec le choeur Chorilla 5 concerts "Des cathédrales et des Hommes". C'était une création authentique, inspirée librement de la comédie musicale "Notre Dame de Paris". Une véritable traversée des siècles associant chants, musiques et textes. Une expression de nos forces de vie vers une dimension spirituelle au coeur des cathédrales. C'était un programme riche et éclectique allant du pur chant grégorien à des musiques plus contemporaines qui a drainé plus de 3.000 spectateurs.
//             </p>
//         </div>
//     )
// }

// function OdJ() {
//     return (
//         <div>
//             <h2 className="text-secondary font-medium text-2xl pt-30 pb-5">
//                 Orchestre des Jeunes
//             </h2>
//             <p>
//                 L'orchestre des jeunes est composé de 15 musiciens dynamiques. Il regroupe des accordéonistes, des pianistes et des percussionnistes. L'orchestre est actuellement dirigé par Jérémie REY et Quentin REY.
//             </p>
//             <p>
//                 Un répertoire varié permet à ces jeunes d'apprendre à jouer ensemble des œuvres variées dont certaines tirés de la chanson française, anglaise, ou encore des musiques de films ou des thèmes irlandais.
//             </p>
//             <p>
//                 Ces jeunes musiciens motivés et de tous niveaux peuvent ensuite intégrer l'orchestre d'accordéon du Sundgau pour persévérer dans la musique d'ensemble et y découvrir un autre répertoire.
//             </p>
//             <p>
//                 L'orchestre se produit lors de différentes manifestations, parfois seul, parfois en première partie de l'orchestre d'accordéon du Sundgau.
//             </p>
//         </div>
//     )
// }

// function EdM() {
//     return (
//         <div>
//             <h2 className="text-secondary font-medium text-2xl pt-30 pb-5">
//                 École de Musique
//             </h2>
//             <p>
//                 Notre école de musique propose des cours d'accordéon, de guitare et de piano.
//             </p>
//             <p>
//                 Les inscriptions sont ouvertes.
//             </p>
//             {/* TODO : Mettre à jour les coordonées */}
//             <p>
//                 Contact: info@accordeon-sundgau.com
//             </p>
//             <p>
//                 Tel.: 06 80 85 68 60
//             </p>
//         </div>
//     )
// }


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