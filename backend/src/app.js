import express from 'express';
import GroupRouter from '../src/router/GroupRouter.js';
import bodyParser from 'body-parser';
const app = express();
const port = 3000;
app.use(bodyParser.json());
new GroupRouter(app, "/api/groups");
app.get('/', (req, res) => {
    res.send('asdasd');
});
app.listen(3000, () => {
    console.log('Sistema en escuchando en puerto 3000');
});
