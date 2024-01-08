export default class MiFooterCoponent extends HTMLElement{
    _template = `
        <footer>©️ Javier Ibarra 2023</footer>
    `;
    constructor() {
        super();

        this._shadowRoot = this.attachShadow({ mode: 'open' });
        this._shadowRoot.innerHTML = this._template;
    }
}

window.customElements.define('mi-footer', MiFooterCoponent);