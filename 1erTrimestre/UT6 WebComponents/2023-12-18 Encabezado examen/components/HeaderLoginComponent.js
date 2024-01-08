export default class HeaderLoginComponent extends HTMLElement{
    #template = `
        <style>
            :host{
                display: flex;
                align-items: center;
                gap: 1rem;
                padding: 1rem !important;
            }

            .company-name {
                flex-grow: 1;
                text-transform: uppercase;
                text-align: center;
                font-size: 2rem;
            }
        </style>

        
        <span class= "company-name">FlightsBooking ✈️</span>
        <span style= "font-weight: bold; text-transform: capitalize" id="tSpnFullname"></span>
        <button id="tButCloseSession"></button>
        
    `;

    #shadowRoot;

    constructor(){
        super(); 
        //Llamada al constructor del padre. No hace falta normalmente, ya que automaticamente lo hace solo. Si que hay que ponerlo si queremos pasarle un parámetro

        this.#shadowRoot = this.attachShadow ({ mode: 'open' });
        this.#shadowRoot.innerHTML = this.#template;

        
        const fullname = window.sessionStorage.getItem('fullname');
        this.#shadowRoot.querySelector('#tSpnFullname').textContent = fullname;
        
        this.#setupCloseButton();
    }
    
    static get observedAttributes(){
        return ['button-text'];
    }
    
    #setupCloseButton(){
        this.#shadowRoot.querySelector('#tButCloseSession').addEventListener('click', _ =>{
            // window.sessionStorage.removeItem('fullname');
            // window.location = '../views/login.htm';
            
            this.#triggerCloseSessionEvent();
        });
    }
    
    #triggerCloseSessionEvent(){
        this.dispatchEvent(new CustomEvent('sessionclosed'));   
    }

    attributeChangedCallback(name, oldValue, newValue){
        if (name=== 'button-text'){
            this.#shadowRoot.querySelector('#tButCloseSession').textContent = newValue;
        }
    }
}

window.customElements.define('header-login', HeaderLoginComponent);