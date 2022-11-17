var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { MongoClient } from 'mongodb';
class ConectarMongoDb {
    constructor() {
        this.url = 'mongodb+srv://ProdeMundial:ProdeMundial@prodemundial.e2r0j4a.mongodb.net/test'; // archivo .env
        this.client = new MongoClient(this.url);
        this.dbName = 'WorldCupProde';
    }
    conectar() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.client.connect();
                console.log('Conectado a base de datos.');
                const db = this.client.db(this.dbName);
                return db;
            }
            catch (e) {
                console.log(e);
            }
        });
    }
    desconectar() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.client.close();
            console.log('Desconectado de la base de datos.');
        });
    }
}
export { ConectarMongoDb };
