import Group from '../models/Group.js';
import { ConectarMongoDb } from './ConectarMongoDb.js';

class GroupDaoMongoDb{

    private conectarMongoDb : ConectarMongoDb = new ConectarMongoDb();

    public async findAll () : Promise<Group[]> {
        const db = await this.conectarMongoDb.conectar();
        const groups = new Array<Group>;                
        if(db != undefined) {
            const collection = db.collection('Groups');    
            const findResult = (await collection.find().toArray())
            findResult.forEach(e => 
                groups.push(new Group(e.Group.Letter, e.Group.Teams)));
            this.conectarMongoDb.desconectar();
        }
        return Promise.resolve(groups);
    }
}

export { GroupDaoMongoDb } 