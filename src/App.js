const express = require('express');
const path = require('path');

class App {
    constructor(db) {
        this._db = db;

        this._app = express();
        this._app.use(express.json());
        this._app.use('/', express.static(path.resolve(__dirname, '../public')));

        this._app.get('/getAllGames', this.onGetAllGames);
        this._app.get('/getGame/id', this.onGetGame);
        this._app.post('/addNewGame', this.onSaveNewGame);
    }

    onGetAllGames = (res) => {
        const count = this._db.getGamesCount();

        res.send(count);
        res.end();
    }

    onGetGame = (req, res) => {
        const id = req;
        const game = this._db.getGame(id);

        res.send(game);
        res.end();
    }

    onSaveNewGame = (req, res) => {
        const { body } = req;
        //console.log(body);
        this._db.saveNewGame(body);
        res.end();
    }

    getApp = () => this._app;
}

module.exports = App;
