import jwt from "jsonwebtoken";
const JWT_KEY = "secret";
class JWT {
    authenticateJWT(req, res, next) {
        const authHeader = req.headers.authorization;
        console.log(authHeader);
        if (authHeader && authHeader !== "null") {
            jwt.verify(authHeader, JWT_KEY, (err, user) => {
                if (err) {
                    return res
                        .status(403)
                        .send({ success: false, message: "Token Expired" });
                }
                req.user = user;
                next();
            });
        }
        else {
            res.status(403).json({ success: false, message: "UnAuthorized" });
        }
    }
}
export default new JWT();
