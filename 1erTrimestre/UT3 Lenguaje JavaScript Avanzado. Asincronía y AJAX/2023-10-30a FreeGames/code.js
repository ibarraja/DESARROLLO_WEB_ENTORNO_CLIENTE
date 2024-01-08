import GamesService from './services/GamesService.js';

document.addEventListener('DOMContentLoaded',setup);

async function setup(){
    let service = new GamesService();
    
    let genres = await service.getGenres();
    renderGenres(genres);

    let games = await service.getGames();
    renderGames(games);
    // let platforms = await service.getPlatforms();
    // renderPlatforms();
    // let publishers = await service.getPublishers();
    // renderPublishers();
}

async function renderGenres(genres){
    let nTable = document.querySelector('#tTblGenres');
    genres.forEach(({id,name}) => {
        let nTr = document.createElement('tr');
        nTable.appendChild(nTr)
        
        let nTd = document.createElement('td');
        nTd.setAttribute('id', id);
        let nText = document.createTextNode(name);
        nTd.appendChild(nText);
        nTr.appendChild(nTd);  
    });
}



async function renderGames(games) {
    let nTable = document.querySelector('#tTblGames');
    let i = 0;
    games.forEach(game =>{
        i++;
        let nTr = document.createElement('tr');
        nTr.dataset.game = game.id;
        nTr.addEventListener('click',getAndRenderGameByGameId)
        nTable.appendChild(nTr);

        let nTdNum = document.createElement('td');
        nTdNum.textContent = i;
        nTr.appendChild(nTdNum);


        let nTd = document.createElement('td');
        nTd.dataset.game = game.id;
        nTd.textContent = game.title;
        // nTd.addEventListener('click',getAndRenderGameByGameId)
        nTr.appendChild(nTd);

    })
}

async function getAndRenderGameByGameId(e){
    //Get Game
    let gameId = e.target.dataset.game;

    let service = new GamesService();
    let game = await service.getGameByID(gameId);
    console.table(game);
    
    //Render Game
    let nDialog = document.querySelector('#tDlgGameMessage');
    nDialog.innerHTML = '';
    
    //Boton
    // let nButton = document.querySelector('#tButClose');
    let nButton = document.createElement('button');
    nButton.textContent = 'Cerrar'
    nButton.addEventListener('click',cerrarDialogo);
    nDialog.appendChild(nButton);
    
    //Nombre
    // let nParName = document.querySelector('#tParGameName');
    let nParName = document.createElement('h3');
    nParName.textContent = game.title;
    nDialog.appendChild(nParName);
    
    //Genero
    // let nParGenre = document.querySelector('#tParGameGenre');
    let nParGenre = document.createElement('p');
    let genre = await service.getGenreById(game.genre);
    nParGenre.textContent = genre;
    nDialog.appendChild(nParGenre);
    
    //Descripción
    // let nParDesc = document.querySelector('#tParGameDescription');
    let nParDesc = document.createElement('p');
    nParDesc.textContent= game.short_description;
    nDialog.appendChild(nParDesc);
    
    //Imagen
    // let nImg = document.querySelector('#tImgGame');
    let nImg = document.createElement('img');
    nImg.src = 'http://127.0.0.1:3000' + game.thumbnail;
    nImg.alt = 'Imagen de ' + game.title;
    nDialog.appendChild(nImg);
    
    nDialog.showModal();

}

function cerrarDialogo(e){
    document.querySelector('#tDlgGameMessage').close(); 
}

// A ver Javi. No te pierdas. Quiero que busques los juegos, accedas al id de cada juego en localhost:3000/game/`id`. Una vez ahi,
// miras cual es su codigo de "genre" y lo comparas con el codigo del Genero que hayas pinchado. Si es el mismo lo guardamos en un array
// Que posteriormente mostraremos en la etiqueta dialog de genre.html [(.showModal()) para mostrar (.close()) para ocultar]