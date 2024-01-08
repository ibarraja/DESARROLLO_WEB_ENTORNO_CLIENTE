import GamesService from './services/GamesService.js';

document.addEventListener('DOMContentLoaded',setup);

async function setup(){
    // let service = new GamesService();
    getAndRenderGames();
}

// async function renderGenres(genres){
//     let nTable = document.querySelector('#tTblGenres');
//     genres.forEach(({id,name}) => {
//         let nTr = document.createElement('tr');
//         nTable.appendChild(nTr)
        
//         let nTd = document.createElement('td');
//         nTd.setAttribute('id', id);
//         let nText = document.createTextNode(name);
//         nTd.appendChild(nText);
//         nTr.appendChild(nTd);  
//     });
// }



async function getAndRenderGames() {
    //Obtener los juegos
    let service = new GamesService();
    
    let games = await service.getGamesQuick();
    
    
    
    //Reenderizar los juegos
    let nDiv = document.querySelector('.tDivGames');
    nDiv.innerHTML = '';
    games.forEach(game => {
    // for (let game of games) {
        console.table(game.title);
        
        let gameId = game.id;
        
        let nArticle = document.createElement('article');
        nArticle.dataset.game = gameId;
        
    
        let nParName = document.createElement('h3');
        nParName.textContent= game.title;
        nArticle.appendChild(nParName);
        
        let nParGenre = document.createElement('p');
        // let genre = await service.getGenreById(game.genre);

        let genre = game.genre;
        if(genre === '7e1cb3f8-36c9-4eb3-a269-e0c1154768b8'){
            genre = 'Shooter';
        } else if (genre === '9e7ec8ea-ac54-4ced-82b9-c76de33da586') {
            genre = 'MMOARPG';
        } else if (genre === '5a74d626-12d9-4156-8162-14a7a0a6e737') {
            genre = 'ARPG';
        } else if (genre === '05c43499-cc01-4fd6-b5a7-5513235f1223') {
            genre = 'Strategy';
        } else if (genre === '997663d7-9f87-4b10-944c-7366e8eaec87') {
            genre = 'MMORPG';
        } else if (genre === '416b9913-f067-4e5d-abf4-e9def0ffdd72') {
            genre = 'Fighting';
        } else if (genre === '83d61c71-734c-4c48-92a3-bd8b95a9584b') {
            genre = 'Action RPG';
        } else if (genre === '55a8a94a-f116-424e-8c04-766c7e657313') {
            genre = 'Battle Royale';
        } else if (genre === '3f1eff4b-160a-400b-ab2e-0dd4854d73bb') {
            genre = 'MOBA';
        } else if (genre === '693e31d2-9a6e-4e97-b7df-a9727ee91bb9') {
            genre = 'Sports';
        } else if (genre === '09100d9c-3496-4140-b41a-1f42d79f11f8') {
            genre = 'Racing';
        } else if (genre === '87c34b43-e11d-482c-af06-a3a51d59646b') {
            genre = 'Card Game';
        } else if (genre === '45e5c391-624e-449d-9f3a-3fc811b7274b') {
            genre = 'MMO';
        } else if (genre === '3c55c32d-110c-4c4d-8ac8-49e7b90b1490') {
            genre = 'Social';
        } else if (genre === '1c4f05d9-ec22-471b-acdd-bacb49e32418') {
            genre = 'MMORPG';
        } else if (genre === '11c2fd9f-25c0-48bb-a808-62dbce4e55ff') {
            genre = 'Fantasy';
        }
        nParGenre.textContent = genre;
        nArticle.appendChild(nParGenre);

        let nParDesc = document.createElement('p');
        nParDesc.textContent= game.short_description;
        nArticle.appendChild(nParDesc);

        let nImg = document.createElement('img');
        nImg.src = 'http://127.0.0.1:3000' + game.thumbnail;
        nImg.alt = 'Imagen de ' + game.title;
        nArticle.appendChild(nImg)
        
        nDiv.appendChild(nArticle);

    // };
    });

        
        




    // }
}

// async function getAndRenderGameByGameId(e){
//     //Get Game
//     let gameId = e.target.dataset.game;

//     let service = new GamesService();
//     let game = await service.getGameByID(gameId);
//     console.table(game);
    
//     //Render Game
//     let nDialog = document.querySelector('#tDlgGameMessage');
//     nDialog.innerHTML = '';
    
//     //Boton
//     // let nButton = document.querySelector('#tButClose');
//     let nButton = document.createElement('button');
//     nButton.textContent = 'Cerrar'
//     nButton.addEventListener('click',cerrarDialogo);
//     nDialog.appendChild(nButton);
    
//     //Nombre
//     // let nParName = document.querySelector('#tParGameName');
//     let nParName = document.createElement('h3');
//     nParName.textContent = game.title;
//     nDialog.appendChild(nParName);
    
//     //Genero
//     // let nParGenre = document.querySelector('#tParGameGenre');
//     let nParGenre = document.createElement('p');
//     let genre = await service.getGenreById(game.genre);
//     nParGenre.textContent = genre;
//     nDialog.appendChild(nParGenre);
    
//     //Descripción
//     // let nParDesc = document.querySelector('#tParGameDescription');
//     let nParDesc = document.createElement('p');
//     nParDesc.textContent= game.short_description;
//     nDialog.appendChild(nParDesc);
    
//     //Imagen
//     // let nImg = document.querySelector('#tImgGame');
//     let nImg = document.createElement('img');
//     nImg.src = 'http://127.0.0.1:3000' + game.thumbnail;
//     nImg.alt = 'Imagen de ' + game.title;
//     nDialog.appendChild(nImg);
    
//     nDialog.showModal();

// }

// function cerrarDialogo(e){
//     document.querySelector('#tDlgGameMessage').close(); 
// }

// A ver Javi. No te pierdas. Quiero que busques los juegos, accedas al id de cada juego en localhost:3000/game/`id`. Una vez ahi,
// miras cual es su codigo de "genre" y lo comparas con el codigo del Genero que hayas pinchado. Si es el mismo lo guardamos en un array
// Que posteriormente mostraremos en la etiqueta dialog de genre.html [(.showModal()) para mostrar (.close()) para ocultar]