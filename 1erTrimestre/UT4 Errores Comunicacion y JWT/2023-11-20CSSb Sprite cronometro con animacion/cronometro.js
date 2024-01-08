document.addEventListener('DOMContentLoaded',setup);

const spriteWidth = 90;
function setup(){
    let nNumber = document.querySelector('#tDivNumber');

    for(let i = 8; i >= 0; i--){
        setTimeout(()=> {
            nNumber.style.backgroundPositionX= `${-1 * i * spriteWidth}px`;
        },(9-i) * 1000);
    }
}
