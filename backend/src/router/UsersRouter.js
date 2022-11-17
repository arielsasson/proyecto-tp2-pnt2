import { UsersController } from '../controller/UsersController.js';
class UsersRouter {
    constructor(app, direccion) {
        this.app = app;
        this.direccion = direccion;
        this.configurarRutas();
    }
    configurarRutas() {
        this.app.route(this.direccion + "/login")
            .post(UsersController.login);
        this.app.route(this.direccion + "/:username")
            .get(UsersController.get);
        this.app.route(this.direccion)
            .post(UsersController.add);
        return this.app;
    }
}
export default UsersRouter;
