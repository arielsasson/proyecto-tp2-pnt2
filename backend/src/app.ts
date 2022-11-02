import express from 'express';
import GroupRouter from '../src/router/GroupRouter.js'
import bodyParser from 'body-parser';
import cors from 'cors'

const app = express();
const port = 3000

app.use(bodyParser.json());

new GroupRouter(app,"/api/groups");

app.use(cors());

app.get('/', (req, res) =>{
    res.send('asdasd');
})

app.listen(port, () =>{
    console.log('Sistema en escuchando en puerto 3000');    
})
