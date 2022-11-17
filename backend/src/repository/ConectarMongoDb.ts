import { MongoClient } from 'mongodb'

class ConectarMongoDb {

    private url = 'mongodb+srv://ProdeMundial:ProdeMundial@prodemundial.e2r0j4a.mongodb.net/test';  // archivo .env
    private client = new MongoClient(this.url);
    private dbName = 'WorldCupProde';

    async conectar() {
        try {
            await this.client.connect();
            console.log('Conectado a base de datos.');
            const db = this.client.db(this.dbName);
            return db;    
        } catch(e) {
            console.log(e);            
        }
    }

    async desconectar() {
        await this.client.close();
        console.log('Desconectado de la base de datos.');        
    }
  
}  

export {ConectarMongoDb} 