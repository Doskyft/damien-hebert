class ProjectKanta extends HTMLElement {
    connectedCallback() {
        this.outerHTML = `
            <my-project
                    date="2024 - Aujourd'hui"
                    image="images/projects/kanta-website.png"
                    image-alt="Page d'accueil du site kanta.fr"
                    link="https://kanta.fr"
                    link-text="Accéder au site"
                    title="Kanta"
            >
                <p>
                    Fondée en 2020, la startup <a href="https://kanata.fr" rel="nofollow" target="_blank">Kanta</a> 
                    propose une plateforme saas destiné aux exports comptable leur 
                    permettant de réaliser leur lutte anti-blanchiment d'argent
                    (<a href="https://www.kanta.fr/guides/norme-nplab">LAB</a>).
                </p>
                <p>
                    Depuis début 2024, je participe au développement des applications de Kanta, principalement
                    dans le développement de la partie backend et la création de différentes API.
                </p>
            </my-project>
        `;
    }
}

customElements.define('my-project-kanta', ProjectKanta)
