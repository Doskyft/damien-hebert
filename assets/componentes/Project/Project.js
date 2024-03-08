class Project extends HTMLElement {
        connectedCallback() {
        const summary = `
            <div class="project-summary">   
                <h3 class="project-summary-title">
                    ${this.getAttribute('title')}
                </h3>
                <span class="project-summary-date">
                    ${this.getAttribute('date')}
                </span>
                <div class="project-summary-text">
                    ${this.innerHTML}
                </div>
            </div>
        `

        const image = `
            <div class="project-image">
                <img alt="${this.getAttribute('image-alt')}"
                     src="${this.getAttribute('image')}"
                >
    
                <div class="link">
                    <a class="btn btn-secondary"
                       href="${this.getAttribute('link')}" 
                       rel="nofollow"
                        target="_blank"
                    >
                        ${this.getAttribute('link-text')}
                    </a>
                </div>
            </div>
        `

        this.outerHTML = `
            <article class="project">
                ${image}
                ${summary}
            </article>
        `;
    }
}

customElements.define('my-project', Project)
