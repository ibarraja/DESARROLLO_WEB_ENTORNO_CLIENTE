export default class SpinnerComponent extends HTMLElement{
    _template= `

    <style>
        *, *::before, *::after{
            box-sizing: border-box;
            padding: 0;
            margin: 0;
        }
        
        .container {
            position:absolute;
            width: 100vw;
            height: 100vh;
            top: 0;
            left:0;
            display: grid;
            place-items: center;
            z-index: 1000;
            background-color: grey;

        }
        
        .spinner {
            margin: auto;
            background-color: white; 
            position: relative;
            width: 100px;
            height: 100px;
            border:none;
            border-top: solid 12px red;
            /* border-left: solid 10px transparent; */
            border-right: solid 12px transparent;
            border-radius: 50%;
            overflow: hidden;
            display: flex;
            justify-content: center;
            place-items: center;
            z-index: 3;
            animation: spin 850ms linear 0ms infinite;
        }
        
        
        .spinner::before {
            content: "";
            position: absolute;
            height: inherit;
            width: inherit;
            border: none;
            border-top: solid 15px green;
            border-left: solid 15px green;
            border-right: solid  15px transparent;
            border-radius: 50%;
            z-index: 2;
        
        }
        
        .spinner::after {
            content: "";
            position: absolute;
            height: inherit;
            width: inherit;
            border: none;
            border-top: solid 25px blue;
            border-left: solid 25px blue;
            /* border-bottom: solid 25px blue; */
            border-right: solid 25px transparent;
            border-radius: 50%;
            z-index: 1;
        
        }
        
        @keyframes spin {
            from{
                rotate: 0turn;
            }
            to {
                rotate: 1turn;
            }
        }
    </style>

    <div class="container">    
        <dialog class="spinner"></dialog>
    </div>
    `;

    constructor(){
        super();
        this._shadowRoot = this.attachShadow({ mode: 'open'});
        this._shadowRoot.innerHTML = this._template
    }

    showSpinner(){
        this._shadowRoot.querySelector('.spinner').showModal();
    }
    
    hideSpinner(){
        this._shadowRoot.querySelector('.spinner').close();

    }

}

window.customElements.define('spinner-wait', SpinnerComponent);