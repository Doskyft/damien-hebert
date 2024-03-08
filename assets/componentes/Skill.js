class Skill extends HTMLElement {
    connectedCallback() {
        this.outerHTML = `
            <div class="skill">
                <img alt="${this.getAttribute('image-alt')}"
                     src="${this.getAttribute('image-src')}"
                >
                <div class="hexagon"></div>
            </div>
        `

    }
}

customElements.define('skill', Project)
