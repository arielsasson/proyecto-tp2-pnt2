import express from 'express'
import { GroupController } from '../controller/GroupController.js';

class GroupRouter {
    app: express.Application;
    direccion: string;
    constructor(app: express.Application, direccion: string) {
        this.app = app;
        this.direccion = direccion;
        this.configurarRutas();
    }
    configurarRutas() {
        this.app.route(this.direccion)
            .get(GroupController.findAll)

        return this.app;
    }
}

export default GroupRouter