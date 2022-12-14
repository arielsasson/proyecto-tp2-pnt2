var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import Playoff from '../models/Playoff.js';
import { ConectarMongoDb } from './ConectarMongoDb.js';
class PlayoffDaoMongoDb {
    constructor() {
        this.conectarMongoDb = new ConectarMongoDb();
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const db = yield this.conectarMongoDb.conectar();
            const playoffs = new Array;
            if (db != undefined) {
                const collection = db.collection('Playoffs');
                const findResult = (yield collection.find().toArray());
                findResult.forEach(e => playoffs.push(new Playoff(e.Playoff.order, e.Playoff.date, e.Playoff.teams)));
                this.conectarMongoDb.desconectar();
            }
            return Promise.resolve(playoffs);
        });
    }
}
export { PlayoffDaoMongoDb };
