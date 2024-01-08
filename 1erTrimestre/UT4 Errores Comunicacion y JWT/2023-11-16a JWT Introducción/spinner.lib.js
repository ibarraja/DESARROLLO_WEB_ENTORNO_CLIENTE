let template = `
    <style>
        dialog{
            overflow: hidden;
        }

        .spinner{
            border-top: solid 50px red;
            border-bottom: solid 50px green;
            border-radius: 50%;
            width: 100px;
            height: 100px;
            animation: giro 2s linear 0s infinite;
        }

        @keyframes giro{
            from{
                rotate: 0turn;
            } 
            
            to {
                rotate: 1turn;
            }
        }
    </style>

    <dialog id="tDlgSpinner">
        <div class="spinner"></div>
    </dialog>
`;

export function openSpinner() {
    document.body.innerHTML += template;
    document.querySelector('#tDlgSpinner').showModal();
}

export function closeSpinner() {
    document.querySelector('#tDlgSpinner').close();
    document.body.removeChild(document.querySelector('#tDlgSpinner'));
}