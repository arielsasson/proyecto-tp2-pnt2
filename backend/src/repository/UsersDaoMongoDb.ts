import Dao from './Dao.js'
import User from '../models/User.js';
import { ConectarMongoDb } from './ConectarMongoDb.js';

class UsersDaoMongoDb{

    private conectarMongoDb : ConectarMongoDb = new ConectarMongoDb();

    public async findByUsername (username : string) : Promise<User> {
        const db = await this.conectarMongoDb.conectar();
        let user = new User("", "");
        if(db != undefined) {
            const collection = db.collection('Users');    
            const findResult = await collection.findOne({Username:username})
            if(findResult != null) {
                user = new User(findResult.Username, findResult.Password)
            }
            this.conectarMongoDb.desconectar();    
        }
        return Promise.resolve(user);
    }

    public async add (user : User) : Promise<Boolean> {
        const db = await this.conectarMongoDb.conectar();
        if(db != undefined) {
            const collection = db.collection('Users');    
            await collection.insertOne(user)
            
            this.conectarMongoDb.desconectar();    
        }
        return Promise.resolve(true);
    }
}

export {UsersDaoMongoDb} 