import express from 'express';
import GroupRouter from '../src/router/GroupRouter.js'
import bodyParser from 'body-parser';
import cors from 'cors'

const app = express();
const port = 3000

var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200,
  }
app.use(cors(corsOptions));

app.use(bodyParser.json());

new GroupRouter(app,"/api/groups");

app.get('/', (req, res) =>{
    res.send('asdasd');
})

app.listen(3000, () =>{
    console.log('Sistema en escuchando en puerto 3000');    
})