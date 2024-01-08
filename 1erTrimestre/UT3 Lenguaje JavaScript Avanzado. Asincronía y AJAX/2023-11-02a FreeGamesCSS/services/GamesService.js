export default class GamesService{
    static URL_BASE = 'http://127.0.0.1:3000'

    async getGenres(){
        // http://127.0.0.1:3000/genres
        let url = GamesService.URL_BASE + '/genres';
        let response = await fetch(url);
        let data = await response.json();
        return data.genres;
    }

    async getGenreById(id){
        // http://127.0.0.1:3000/genre/5a74d626-12d9-4156-8162-14a7a0a6e737
        let url = GamesService.URL_BASE + '/genre/' + id;
        let response = await fetch(url);
        let data = await response.json();
        return data.genre.name;
    }
    
    async getPlatforms(){
        // http://127.0.0.1:3000/platforms
        let url = GamesService.URL_BASE + '/platforms';
        let response = await fetch(url);
        let data = await response.json();
        return data.platforms;
    }
    
    async getPublishers(){
        // http://127.0.0.1:3000/publishers
        let url = GamesService.URL_BASE + '/publishers';
        let response = await fetch(url);
        let data = await response.json();
        return data.publishers;
    }

    async getGames(){
        // http://127.0.0.1:3000/games
        let url = GamesService.URL_BASE + '/games';
        let response = await fetch(url);
        let data = await response.json();
        return data.games;
    }

    async getGameByID(id){
        // http://127.0.0.1:3000/game/3f5a5523-b060-48b7-a5f9-c5ada661d025
        let url = GamesService.URL_BASE + '/game/' + id;
        let response = await fetch(url);
        let data = await response.json();
        return data.game;
    }


    async getGamesQuick() {

        let games = await this.getGames();

        let promises = games.map(game => this.getGameByID(game.id));

        let gamesPromises = await Promise.all(promises);

        return gamesPromises;
    }

}

