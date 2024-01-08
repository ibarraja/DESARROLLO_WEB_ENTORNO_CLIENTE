document.addEventListener('DOMContentLoaded',setup);

function setup() {
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
    let nDiv = document.querySelector('#tDivContinents');
    continents.forEach(({code,name}) => {
        
        let nCheckbox = document.createElement('input');
        nCheckbox.setAttribute('type','checkbox');
        nCheckbox.setAttribute('name','continents');
        nCheckbox.setAttribute('id',`tChk${code}`);
        nCheckbox.setAttribute('value',code);
        nCheckbox.addEventListener('change',retrieveAndShowCountriesByContinent)

        let nLabel = document.createElement('label');
        nLabel.setAttribute('for',`tChk${code}`);

        
        let nText = document.createTextNode(name);
        
        nLabel.appendChild(nText);
        nDiv.appendChild(nCheckbox);
        nDiv.appendChild(nLabel);
        
    });
    hideLoadingSpinner()
}

function retrieveAndShowCountriesByContinent(e){
    showLoadingSpinner();

    let nCheckbox = e.target;
    let continentId = nCheckbox.value; 
    
    if (nCheckbox.checked){
        let url = 'http://127.0.0.1:8080/api/countries'
        
        fetch(url)
            .then(response => response.json())
            .then(data => {
                const filteredCountries = data.countries.filter(country => country.continent === continentId);
                showCountries(filteredCountries);
            })
            .catch(alert);

    } else {
        let nTbody = document.querySelector('#tTabCountries>tbody');
        
        let rows = document.querySelectorAll(`tr[data-continent="${continentId}"]`);
        for (let row of rows){
            nTbody.removeChild(row);

        }
        hideLoadingSpinner()

    }
    
}

function showCountries(countries){
    
    let nTbody = document.querySelector('#tTabCountries>tbody');
    
    
    countries.forEach(country => {
        let nTr = document.createElement('tr');
        nTr.setAttribute('data-continent',country.continent);
        nTbody.appendChild(nTr);
        
        let urlCountry = `http://127.0.0.1:8080/api/countries/${country.code}`;
        fetch(urlCountry)
            .then(response=>response.json())
            .then(data =>{
                
                let nTdFlag = document.createElement('td');

                let nImg = document.createElement('img');
                nImg.setAttribute('src',data.country.flags.svg)

                nTdFlag.appendChild(nImg);
                nTr.appendChild(nTdFlag);

                let nTdCountry = document.createElement('td');
                let nTextName = document.createTextNode(data.country.name);
                nTdCountry.appendChild(nTextName);
                nTr.appendChild(nTdCountry);

                let nTdPopulation = document.createElement('td');
                let nTextPopulation = document.createTextNode(data.country.population);
                nTdPopulation.appendChild(nTextPopulation);
                nTr.appendChild(nTdPopulation);

            })
            
        

        

        
        // let nTdPopullation = document.createElement('td');
        // nTr.appendChild(nTdPopullation);
        
    });

    hideLoadingSpinner()
}

// function fillList(countries){
//     let nOl = document.querySelector('#tOlCountries')
//     while(nOl.hasChildNodes()){
//         nOl.removeChild(nOl.firstChild);
//     }
//     countries.forEach(({code,name}) => {

        
//         let nLi = document.createElement('li');
//         nLi.setAttribute('value',code);
        
//         let nText=document.createTextNode(name);
        
//         nLi.appendChild(nText);
//         nOl.appendChild(nLi);
        
//     });
//     hideLoadingSpinner()
// }

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