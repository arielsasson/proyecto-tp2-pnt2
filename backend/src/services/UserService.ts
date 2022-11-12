import { UsersDaoMongoDb } from "../repository/UsersDaoMongoDb.js";
import UserLoginDTO from "../dto/UserLoginDTO.js";
import jwt from 'jsonwebtoken';


class UserService {
    usersDaoMongoDb : UsersDaoMongoDb = new UsersDaoMongoDb();

    async login(username: string, password: string)  : Promise<UserLoginDTO> {
        const user = await this.usersDaoMongoDb.findByUsername(username);
        console.log(user)
        console.log(password)
        if(user.Password === password){
            const token = jwt.sign({
                name: user.Username,
                id: user.Password
            }, "secret")

            return Promise.resolve(new UserLoginDTO(token, user.Username, ""))
        }
        else{
            return Promise.resolve(new UserLoginDTO("", user.Username,"Username o password incorrectos"))
        }
    }
}

export default UserService