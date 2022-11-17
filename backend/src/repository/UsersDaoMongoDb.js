var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import User from "../models/User.js";
import { ConectarMongoDb } from "./ConectarMongoDb.js";
class UsersDaoMongoDb {
    constructor() {
        this.conectarMongoDb = new ConectarMongoDb();
    }
    findByUsername(username, withPredictions) {
        return __awaiter(this, void 0, void 0, function* () {
            const db = yield this.conectarMongoDb.conectar();
            let user = new User("", "", []);
            if (db != undefined) {
                const collection = db.collection("Users");
                if (withPredictions) {
                    const findResult = yield collection.findOne({ Username: username });
                    if (findResult != null) {
                        user = new User(findResult.Username, findResult.Password, findResult.Predictions);
                    }
                }
                else {
                    const findResult = yield collection.findOne({ Username: username }, { projection: { Predictions: 0 } });
                    if (findResult != null) {
                        user = new User(findResult.Username, findResult.Password, []);
                    }
                }
                this.conectarMongoDb.desconectar();
            }
            return Promise.resolve(user);
        });
    }
    add(user) {
        return __awaiter(this, void 0, void 0, function* () {
            const db = yield this.conectarMongoDb.conectar();
            if (db != undefined) {
                const collection = db.collection("Users");
                yield collection.insertOne(user);
                this.conectarMongoDb.desconectar();
            }
            return Promise.resolve(true);
        });
    }
}
export { UsersDaoMongoDb };
