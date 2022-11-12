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
        this.app.route(this.direccion)
            .post(UsersController.Login)
            
        return this.app;
    }
}

export default UsersRouter