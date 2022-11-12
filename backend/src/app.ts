import express from 'express';
import GroupRouter from '../src/router/GroupRouter.js'
import UsersRouter from './router/UsersRouter.js';
import bodyParser from 'body-parser';
import cors from 'cors'

const app = express();
const port = 3000

app.use(bodyParser.json());

new GroupRouter(app,"/api/groups");
new UsersRouter(app,"/api/users");

app.use(cors());

app.get('/', (req, res) =>{
    res.send('asdasd');
})

app.listen(port, () =>{
    console.log('Sistema en escuchando en puerto 3000');    
})
