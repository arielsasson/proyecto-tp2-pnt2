import express from 'express'

class ProductoMiddleware {
    static async validation(req:express.Request,res:express.Response) {
        if ( !req.body("nombre").exists().isString().notEmpty() ) {
            res.sendStatus(404);
        }
    }        
}

export default ProductoMiddleware