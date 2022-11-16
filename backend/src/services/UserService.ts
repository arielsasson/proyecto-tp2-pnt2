import { UsersDaoMongoDb } from "../repository/UsersDaoMongoDb.js";
import UserLoginDTO from "../dto/UserLoginDTO.js";
import jwt from 'jsonwebtoken';
import User from "../models/User.js";


class UserService {
    usersDaoMongoDb : UsersDaoMongoDb = new UsersDaoMongoDb();

    async login(username: string, password: string)  : Promise<UserLoginDTO> {
        const user = await this.usersDaoMongoDb.findByUsername(username);
        if(user.Password === password){ // user !== null &&
        const user = await this.usersDaoMongoDb.findByUsername(username, false);
        if(user.Password === password){
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

    async get(username: string) : Promise<User>{
        const user = await this.usersDaoMongoDb.findByUsername(username, true);

        return Promise.resolve(user)
    }

    async add(user : User)  : Promise<Boolean> {
        return await this.usersDaoMongoDb.add(user);
        const dbUser = await this.usersDaoMongoDb.findByUsername(user.Username, false);
        if(dbUser == null){
            const created = await this.usersDaoMongoDb.add(user);

            return Promise.resolve(created)
        }
        return Promise.resolve(false);
    }
}

export default UserService