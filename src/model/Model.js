class Model {
    constructor() {
        this.games = [];
    }

    getGames = () => this.games;

    saveNewGame = newGame => {
        this.games.push(newGame);
    }

    getGamesCount = () => {
        return this.games.length;
    }

    getGame = id => {
        this.games.forEach(element => {
            if(element.id === id){
               return element;
            }
        });
    }
}

module.exports = Model;
