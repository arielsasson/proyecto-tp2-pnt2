import express from 'express';
import GroupRouter from '../src/router/GroupRouter.js';
import PlayoffRouter from '../src/router/PlayoffRouter.js';
import UsersRouter from './router/UsersRouter.js';
import bodyParser from 'body-parser';
import cors from 'cors';
const app = express();
const port = 3000;
app.use(bodyParser.json());
new GroupRouter(app, "/api/groups");
new UsersRouter(app, "/api/users");
new PlayoffRouter(app, "/api/playoffs");
app.use(cors());
app.get('/', (req, res) => {
    res.send('asdasd');
});
app.listen(port, () => {
    console.log('Sistema escuchando en puerto 3000');
});
