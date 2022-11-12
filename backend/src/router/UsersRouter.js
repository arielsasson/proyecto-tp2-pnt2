import { UsersController } from '../controller/UsersController.js';
class UsersRouter {
    constructor(app, direccion) {
        this.app = app;
        this.direccion = direccion;
        this.configurarRutas();
    }
    configurarRutas() {
        this.app.route(this.direccion)
            .post(UsersController.Login);
        return this.app;
    }
}
export default UsersRouter;
