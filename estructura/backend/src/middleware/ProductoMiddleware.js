class ProductoMiddleware {
    static async validation(req, res) {
        if (!req.body("nombre").exists().isString().notEmpty()) {
            res.sendStatus(404);
        }
    }
}
export default ProductoMiddleware;
