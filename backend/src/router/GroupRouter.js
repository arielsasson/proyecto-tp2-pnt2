import { GroupController } from '../controller/GroupController.js';
class GroupRouter {
    constructor(app, direccion) {
        this.app = app;
        this.direccion = direccion;
        this.configurarRutas();
    }
    configurarRutas() {
        this.app.route(this.direccion)
            .get(GroupController.findAll);
        return this.app;
    }
}
export default GroupRouter;
