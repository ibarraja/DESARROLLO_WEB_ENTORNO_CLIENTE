export default class GamesService{
    static URL_BASE = 'http://127.0.0.1:3000'

    async getGenres(){
        let url = GamesService.URL_BASE + '/genres';
        let response = await fetch(url);
        let data = await response.json();
        return data.genres;
    }

    async getGenreById(id){
        let url = GamesService.URL_BASE + '/genre/' + id;
        let response = await fetch(url);
        let data = await response.json();
        return data.genre.name;
    }
    
    async getPlatforms(){
        let url = GamesService.URL_BASE + '/platforms';
        let response = await fetch(url);
        let data = await response.json();
        return data.platforms;
    }
    
    async getPublishers(){
        let url = GamesService.URL_BASE + '/publishers';
        let response = await fetch(url);
        let data = await response.json();
        return data.publishers;
    }

    async getGames(){
        let url = GamesService.URL_BASE + '/games';
        let response = await fetch(url);
        let data = await response.json();
        return data.games;
    }

    async getGameByID(id){
        let url = GamesService.URL_BASE + '/game/' + id;
        let response = await fetch(url);
        let data = await response.json();
        return data.game;
    }

    async getGamesByGenre(genreId) {
        // let gamesByGenre = [];
        
        // let games = await this.getGames();
        // games.forEach(async ({id:gameId})=>{
        //     const game = await this.getGameByID(gameId);
        //     if(game.genre === genreId) {
        //         gamesByGenre.push(game);
        //         // console.log(game.title);
        //     }
        // })
        
        // return gamesByGenre;

        let promises = games.map(game => this.getGameByID(game.id));

        let gamesByGenre = await Promise.all(promises);

        return gamesByGenre.filter(game => game.genre === genreId);
    }


}

