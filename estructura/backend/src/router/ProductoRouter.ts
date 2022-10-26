import express from 'express'
import ProductoController from '../controller/ProductoController.js';
import ProductoMiddleware from '../middleware/ProductoMiddleware.js';

class ProductoRouter {
    app: express.Application;
    direccion: string;
    constructor(app: express.Application,direccion: string) {
        this.app = app;
        this.direccion = direccion;
        this.configurarRutas();
    }
    configurarRutas() {
        this.app.route(this.direccion)
            .get(ProductoController.findAll)
            .post(ProductoMiddleware.validation || ProductoController.add)

        this.app.route(this.direccion + "/:id")
            .get(ProductoController.get)
            .delete(ProductoController.delete)
            
        return this.app;
            //.get(ProductoController.findAll)
            /*
            .get( (req,res) => {
                res.send('get productos')
            })
            */
    }
}

export default ProductoRouter