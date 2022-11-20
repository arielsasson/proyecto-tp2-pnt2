import Playoff from '../models/Playoff.js';
import { ConectarMongoDb } from './ConectarMongoDb.js';

class PlayoffDaoMongoDb{

    private conectarMongoDb : ConectarMongoDb = new ConectarMongoDb();

    public async findAll () : Promise<Playoff[]> {
        const db = await this.conectarMongoDb.conectar();
        const playoffs = new Array<Playoff>;                
        if(db != undefined) {
            const collection = db.collection('Playoffs');    
            const findResult = (await collection.find().toArray())
            findResult.forEach(e => 
                playoffs.push(new Playoff(
                    e.Playoff.order,
                    e.Playoff.date,
                    e.Playoff.teams)));
            this.conectarMongoDb.desconectar();
        }
        return Promise.resolve(playoffs);
    }
}

export { PlayoffDaoMongoDb } 