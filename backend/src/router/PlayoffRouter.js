import { PlayoffController } from '../controller/PlayoffController.js';
class PlayoffRouter {
    constructor(app, direccion) {
        this.app = app;
        this.direccion = direccion;
        this.configurarRutas();
    }
    configurarRutas() {
        this.app.route(this.direccion + '/defaults')
            .get(PlayoffController.findAll);
        return this.app;
    }
}
export default PlayoffRouter;
