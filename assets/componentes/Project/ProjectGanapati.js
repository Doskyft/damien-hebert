class ProjectGanapati extends HTMLElement {
    connectedCallback() {
        this.outerHTML = `
            <my-project
                    date="2019 - 2023"
                    image="images/projects/ganapati-website-2.png"
                    image-alt="Page d'accueil du site ganapati.fr"
                    link="https://ganapati.fr"
                    link-text="Accéder au site"
                    title="Ganapati Formations"
            >
                <p>
                    Fondée en 2018, la startup
                    <a href="https://ganapati.fr" rel="nofollow" target="_blank">Ganapati Formations</a>
                    propose différentes applications web permettant la gestion administrative et
                    pédagogique des formations.
                </p>
                <p>
                    Pendant 4 ans, j'ai participé à la conception des applications de Ganapati, principalement
                    dans le développement de la partie backend et la création de différentes API.
                </p>

                <div>
                    <a class="more-detail-toggle" href="#">
                        Afficher plus de détails
                    </a>

                    <div class="more-detail" style="display: none">
                        <ul>
                            <li>
                                Ganapilot - Plateforme de gestion administratif de l'activité de formation,
                                Application réalisée avec Symfony, twig, Scss.
                            </li>
                            <li>
                                Ganabadge - Plateforme de gestion des compétences basée sur la norme
                                OpenBadge,
                                Application réalisée avec Symfony pour l'API et Vuejs pour la partie front
                            </li>
                            <li>
                                Ganasync - API de synchronisation entre différents logiciels de la formation
                                professionnelle et
                                les plateformes des financeurs, telles qu'EDOF, l'espace des organismes de
                                formation lié au CPF,
                                API réalisée avec Symfony, plus utilisation de Selenium pour
                                l'automatisation de certaines plateformes ne disposant pas d'API
                            </li>
                        </ul>
                    </div>
                </div>
            </my-project>
        `;
    }
}

customElements.define('my-project-ganapati', ProjectGanapati)
