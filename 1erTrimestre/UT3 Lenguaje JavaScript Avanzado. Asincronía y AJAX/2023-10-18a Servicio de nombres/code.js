document.addEventListener('DOMContentLoaded',setup);


function setup(e) {
    let nButton = document.getElementById('tButtonShowNames');
    nButton.addEventListener('click', getAndShowName);
}



function getAndShowName(){
    let quantity = document.getElementById('tInputQuantity').value;

    let nRadioMale = document.getElementById('tRadMale');
    let nRadioFemale = document.getElementById('tRadFemale');
    let nRadioBoth = document.getElementById('tRadBoth');

    let gender;
    if (nRadioMale.checked) {
        gender = nRadioMale.value;
    } else if (nRadioFemale.checked) {
        gender = nRadioFemale.value;
    } else {
        gender = nRadioBoth.value;
    }

    let url = `https://namey.muffinlabs.com/name.json?count=${quantity}&type=${gender}`;

    fetch(url)
        .then(response => response.json())
        .then(showName)
        .catch(console.error)
}

function showName(names){
    let nTbdy = document.getElementById('tBdyNames');
    // nTbdy.innerHTML = '';
    while(nTbdy.hasChildNodes()){
        nTbdy.removeChild(nTbdy.firstChild);
    }

    names.forEach(name => {
        let nTr = document.createElement('tr');
        nTbdy.appendChild(nTr);
        
        let nTd = document.createElement('td');
        nTr.appendChild(nTd);

        nTd.textContent = name;
    });
}