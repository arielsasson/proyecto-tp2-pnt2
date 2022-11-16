import { UsersDaoMongoDb } from "../repository/UsersDaoMongoDb.js";
import UserLoginDTO from "../dto/UserLoginDTO.js";
import jwt from 'jsonwebtoken';
import User from "../models/User.js";


class UserService {
    usersDaoMongoDb : UsersDaoMongoDb = new UsersDaoMongoDb();

    async login(username: string, password: string)  : Promise<UserLoginDTO> {
        const user = await this.usersDaoMongoDb.findByUsername(username);
        if(user.Password === password){ // user !== null &&
            const token = jwt.sign({
                name: user.Username,
                id: user.Password
            }, "secret")
            return Promise.resolve(new UserLoginDTO(token, user.Username, ""))
        }
        else{
            return Promise.resolve(new UserLoginDTO("", user.Username, "Username o password incorrectos"))
        }
    }

    async add(user : User)  : Promise<Boolean> {
        // chequear que el usuario no exista!
        return await this.usersDaoMongoDb.add(user);
    }
}

export default UserService