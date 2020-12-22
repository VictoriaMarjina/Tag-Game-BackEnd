class Model {
    constructor() {
        this.games = [];
    }

    getGames = () => this.games;

    saveNewGame = newGame => {
        this.games.push(newGame);
    }
}

module.exports = Model;
