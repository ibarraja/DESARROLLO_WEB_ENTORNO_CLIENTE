export default class MiHeaderComponent extends HTMLElement{
    _template = `
    <style>
        header {
            display: flex;
        }
        h1 {
            flex-grow: 1;
        }
        img{
            width: 8rem;
        }
    </style>
    <header>
        <img src="./assets/logo.png" alt="Thermomix">
        <h1>Cocina con Thermomix</h1>
        <img src="./assets/logo.png" alt="Thermomix">
    </header>
    `;

    constructor() {
        super();

        this._shadowRoot = this.attachShadow({ mode: 'open' });
        this._shadowRoot.innerHTML = this._template;
    }
}

window.customElements.define('mi-header', MiHeaderComponent);