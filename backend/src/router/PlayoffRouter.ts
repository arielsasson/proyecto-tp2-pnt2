import express from 'express'
import { PlayoffController } from '../controller/PlayoffController.js';

class PlayoffRouter {
    app: express.Application;
    direccion: string;
    constructor(app: express.Application, direccion: string) {
        this.app = app;
        this.direccion = direccion;
        this.configurarRutas();
    }
    configurarRutas() {
        this.app.route(this.direccion + '/defaults')
            .get(PlayoffController.findAll)

        return this.app;
    }
}

export default PlayoffRouter