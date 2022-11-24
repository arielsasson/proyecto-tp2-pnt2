import express from 'express';
import GroupRouter from '../src/router/GroupRouter.js';
import PlayoffRouter from '../src/router/PlayoffRouter.js';
import UsersRouter from './router/UsersRouter.js';
import bodyParser from 'body-parser';
import cors from 'cors';
var unless = function (middleware, ...paths) {
    return function (req, res, next) {
        const pathCheck = paths.some(path => path === req.path);
        pathCheck ? next() : middleware(req, res, next);
    };
};
const app = express();
const port = 3000;
app.use(bodyParser.json());
// app.use(unless(JWT.authenticateJWT, "/api/users/login", "api/users"));
new GroupRouter(app, "/api/groups");
new UsersRouter(app, "/api/users");
new PlayoffRouter(app, "/api/playoffs");
// Allowed origins
const allowedOrigins = ["http://localhost:5173", "https://127.0.0.1:5173"];
// Do you want to skip the checking of the origin and grant authorization?
const skipTheCheckingOfOrigin = false;
app.use(cors({
    origin: (origin, callback) => {
        if (!origin || skipTheCheckingOfOrigin)
            return callback(null, true);
        if (allowedOrigins.indexOf(origin) === -1) {
            var msg = "The CORS policy for this site does not " +
                "allow access from the specified Origin.";
            return callback(new Error(msg), false);
        }
        return callback(null, true);
    }
}));
app.get('/', (req, res) => {
    res.send('asdasd');
});
app.listen(port, () => {
    console.log('Sistema escuchando en puerto 3000');
});
