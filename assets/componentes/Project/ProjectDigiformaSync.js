class ProjectDigiformaSync extends HTMLElement {
    connectedCallback() {
        this.outerHTML = `
            <my-project
                    date="2023 - 2024"
                    image="images/projects/digiforma-sync-website.png"
                    image-alt="Page d'accueil du site forma-sync.com"
                    link="https://forma-sync.com/"
                    link-text="Accéder au site"
                    title="Digiforma Sync"
            >
                <p>
                    Digiforma Sync est une filiale du groupe 
                    <a href="https://www.aworldforus.com/" rel="nofollow" target="_blank">A World For Us</a>,
                    leader dans l'édition de logiciels pour les organismes de formation, notamment via son produit phare
                    <a href="https://digiforma.com" rel="nofollow" target="_blank">Digiforma</a>.
                </p>
                <p>
                    En 2023, j'ai développé la première version de l'application Digiforma Sync, aspirant à synchroniser 
                    les données entre les logiciels de la formation professionnelle, dont Digiforma, EDOF, etc. 
                </p>

                <div>
                    <a class="more-detail-toggle" href="#">
                        Afficher plus de détails
                    </a>

                    <div class="more-detail" style="display: none">
                        <ul>
                            <li>
                                Extension Chrome - Développement d'une 
                                <a href="http://assistant.forma-sync.com/" rel="nofollow" target="_blank">extension Chrome</a>
                                pour l'automatisation des
                                tâches de synchronisation avec la plateforme EDOF (Espace des Organismes de Formation)
                            </li>
                            <li>
                                API - Développement d'une
                                <a href="https://api.forma-sync.com/api/v1/doc" rel="nofollow" target="_blank">API</a> 
                                en Symfony pour la synchronisation des données entre
                                différents logiciels de la formation professionnelle
                            </li>
                            <li>
                                Activepieces - Participation au projet opensource 
                                <a href="https://activepieces.com" rel="nofollow" target="_blank">Activepieces</a>, 
                                une application web permettant de réaliser des workflows de synchronisation
                                en no-code, comme pourrait le faire Zapier, Make ou N8N 
                            </li>
                        </ul>
                    </div>
                </div>
            </my-project>
        `;
    }
}

customElements.define('my-project-digiforma-sync', ProjectDigiformaSync)
