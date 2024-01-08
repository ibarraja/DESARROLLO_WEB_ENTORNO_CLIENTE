export default class MiNavComponent extends HTMLElement{
    _template = `
        <style>
        nav{
            grid-area: nav;
        }
        
        nav ul{
            display: flex;
            flex-direction: row;
            font-size: 1.5rem;
            list-style: none;
            justify-content: space-around;
            padding: 15px;
            background-color: var(--color-400);
            border: solid white 1px;
        }
        
        nav a{
            text-decoration: none;
            color: inherit;
        }
        </style>
        <nav>
            <ul>
                <li><a href="books.htm">Ir a libros</a></li>
                <li><a href="dishes.htm">Ir a platos</a></li>
                <li><a href="recipee.htm">Ir a recetas</a></li>
            </ul>
        </nav>
    `;

    constructor() {
        super();

        this._shadowRoot = this.attachShadow({ mode: 'open' });
        this._shadowRoot.innerHTML = this._template;
    }
}

window.customElements.define('mi-nav', MiNavComponent);