import express from 'express'
import {UsersController} from '../controller/UsersController.js';

class UsersRouter {
    app: express.Application;
    direccion: string;
    constructor(app: express.Application,direccion: string) {
        this.app = app;
        this.direccion = direccion;
        this.configurarRutas();
    }
    configurarRutas() {
        this.app.route(this.direccion + "/login")
            .post(UsersController.Login)
        this.app.route(this.direccion + "/:username")
            .get(UsersController.get)
        this.app.route(this.direccion)
            .post(UsersController.add)
        return this.app;
    }
}

export default UsersRouter