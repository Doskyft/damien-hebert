class ProjectArchersDeCaen extends HTMLElement {
    connectedCallback() {
        this.outerHTML = `
            <my-project
                date="2022 - Aujourd'hui"
                image="images/projects/archers-de-caen-website-2.png"
                image-alt="Page d'accueil du site archers-caen.fr"
                link="https://archers-caen.fr"
                link-text="Accéder au site"
                title="Archers de Caen"
            >
                <p>
                    Depuis 1964, le club des
                    <a href="https://archers-caen.fr" rel="nofollow" target="_blank">Archers de Caen</a> 
                    forme de nombreuses personnes à la pratique du tir à l'arc.
                    Chaque année, de nombreux archers caennais participent à diverses compétitions et
                    championnats à l’échelle départementale, régionale et même nationale.
                </p>
                <p>
                    En tant que membre et entraîneur, j'ai réalisé le site web du club que je continue de
                    mettre à jour régulièrement
                </p>

                <div>
                    <a class="more-detail-toggle" href="#">
                        Afficher plus de détails
                    </a>

                    <div class="more-detail" style="display: none">
                        <ul>
                            <li>Site réalisé en Symfony, Twig, React, MySQL et avec des bases de DDD</li>
                            <li>Vitrine de présentation du club</li>
                            <li>Gestion d'actualités</li>
                            <li>Albums photos</li>
                            <li>Gestion des résultats, concours, record, flèches de progression</li>
                            <li>Mise en place d'un back-office</li>
                            <li>Envoi d'email automatique</li>
                            <li>Formulaire d'inscription au concours du club</li>
                            <li>Migration des données de l'ancienne version du site</li>
                            <li>Intégration d'Helloasso pour les paiements, via iframe et API</li>
                            <li>
                                Code en open source sur
                                <a href="https://github.com/Archers-de-Caen/archers-de-caen" rel="nofollow"
                                   target="_blank">
                                    Github
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </my-project>
        `;
    }
}

customElements.define('my-project-archers-de-caen', ProjectArchersDeCaen)
