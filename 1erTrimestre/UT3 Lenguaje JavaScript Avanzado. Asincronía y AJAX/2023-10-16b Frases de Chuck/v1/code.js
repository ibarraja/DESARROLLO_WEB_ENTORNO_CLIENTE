document.addEventListener('DOMContentLoaded',setup);

function setup(_){
    const joke = getJoke();
    showJoke(joke);
}

function getJoke(){
    let url = 'https://api.chucknorris.io/jokes/random';

    fetch(url)
        .then(response => response.json())
        .then(data =>{
            let joke = data.value;
            showJoke(joke);
        })
        .catch(alert);

    
}

function showJoke(joke){
    console.log(joke);
    const nParragraph = document.getElementById('tParWord').textContent = joke;
}