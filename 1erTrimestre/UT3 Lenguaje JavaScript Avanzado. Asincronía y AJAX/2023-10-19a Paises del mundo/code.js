document.addEventListener('DOMContentLoaded',setup);

function setup(e) {
    let nSelect = document.querySelector('#tSelContinent');
    nSelect.addEventListener('change', getCountriesAndShowCountriesByContinent)
    getAndShowContinents();
}

function getAndShowContinents(){
    showLoadingSpinner();
    
    let url = 'http://127.0.0.1:8080/api/continents'
    
    fetch(url)
    .then(response => response.json())
    .then(data =>{
        let continents = data.continents;
        showContinents(continents);
    })
    .catch(alert);
}

function showContinents(continents){
    continents.forEach(({code,name}) => {
        let nSel = document.getElementById('tSelContinent');
        
        let nOpt = document.createElement('option');
        nOpt.setAttribute('value',code);
        
        let nText=document.createTextNode(name);
        
        nOpt.appendChild(nText);
        nSel.appendChild(nOpt);
        
    });
    hideLoadingSpinner()
}

function getCountriesAndShowCountriesByContinent(e){
    showLoadingSpinner();

    let nSelect = e.target;
    // let nSelect = document.querySelector('#tSelContinent');
    const continentId = nSelect.value;

    let url = 'http://127.0.0.1:8080/api/countries'
    
    fetch(url)
    .then(response => response.json())
    .then(({ countries }) => {
        let filteredCountries = countries.filter(({continent})=> continent === continentId);
        fillList(filteredCountries);
    })
    .catch(alert);
}

function fillList(countries){
    let nOl = document.querySelector('#tOlCountries')
    while(nOl.hasChildNodes()){
        nOl.removeChild(nOl.firstChild);
    }
    countries.forEach(({code,name}) => {

        
        let nLi = document.createElement('li');
        nLi.setAttribute('value',code);
        
        let nText=document.createTextNode(name);
        
        nLi.appendChild(nText);
        nOl.appendChild(nLi);
        
    });
    hideLoadingSpinner()
}

function showLoadingSpinner(){
    // let nImg = document.getElementById('tImgLoading');
    // let nImg = document.querySelector('#tImgLoading');
    let nImg = document.querySelector('.spinner-loading');
    nImg.classList.remove('hidden');
    
}
function hideLoadingSpinner(){
    // let nImg = document.getElementById('tImgLoading');
    // let nImg = document.querySelector('#tImgLoading');
    let nImg = document.querySelector('.spinner-loading');
    nImg.classList.add('hidden');
    
}




// function getCountries(){
//     showLoadingSpinner();
    
//     let url = 'http://127.0.0.1:8080/api/countries';

//     fetch(url)
//     .then(response => response.json())
//     .then(data =>{
//         let countries= data.countries;
//         showCountries(countries);
//     })
//     .catch(alert);
    
// }

// function showCountries(countries){

//     let nSel = document.getElementById('tSelContinent');
//     continents.forEach(({code,name,continent}) => {
        
//         let nOpt = document.createElement('option');
//         nOpt.setAttribute('value',code);
        
//         let nText=document.createTextNode(name);
        
//         nOpt.appendChild(nText);
//         nSel.appendChild(nOpt);
        
//     });
//     hideLoadingSpinner()
//     let nOpt = document.querySelector
// }