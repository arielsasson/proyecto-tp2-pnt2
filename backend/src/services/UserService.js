var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { UsersDaoMongoDb } from "../repository/UsersDaoMongoDb.js";
import UserLoginDTO from "../dto/UserLoginDTO.js";
import jwt from 'jsonwebtoken';
class UserService {
    constructor() {
        this.usersDaoMongoDb = new UsersDaoMongoDb();
    }
    login(username, password) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield this.usersDaoMongoDb.findByUsername(username, false);
            if (user.Password === password) { // user !== null &&
                const token = jwt.sign({
                    name: user.Username,
                    id: user.Password
                }, "secret");
                return Promise.resolve(new UserLoginDTO(token, user.Username, ""));
            }
            else {
                return Promise.resolve(new UserLoginDTO("", user.Username, "Username o password incorrectos"));
            }
        });
    }
    get(username) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield this.usersDaoMongoDb.findByUsername(username, true);
            return Promise.resolve(user);
        });
    }
    add(user) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.usersDaoMongoDb.add(user);
            const dbUser = yield this.usersDaoMongoDb.findByUsername(user.Username, false);
            if (dbUser == null) {
                const created = yield this.usersDaoMongoDb.add(user);
                return Promise.resolve(created);
            }
            return Promise.resolve(false);
        });
    }
}
export default UserService;
