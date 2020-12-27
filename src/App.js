const express = require('express');
const path = require('path');

class App {
    constructor(db) {
        this._db = db;

        this._app = express();
        this._app.use(express.json());
        this._app.use('/', express.static(path.resolve(__dirname, '../public')));

        this._app.get('/getAllGames', this.onGetAllGames);
        this._app.post('/getGame/id', this.onGetGame);
        this._app.post('/addNewGame', this.onSaveNewGame);
    }

    onGetAllGames = (req, res) => {
        const count = this._db.getGamesCount();

        res.send(count);
        res.end();
    }

    onGetGame = (req, res) => {
        console.log(res);
        const id = req.json();
        const game = this._db.getGame(id);

        res.send(game);
        res.end();
    }

    onSaveNewGame = (req, res) => {
        console.log(req);
        const { body } = req.json();
        //console.log(body);
        this._db.saveNewGame(body);
        res.end();
    }

    getApp = () => this._app;
}

module.exports = App;
