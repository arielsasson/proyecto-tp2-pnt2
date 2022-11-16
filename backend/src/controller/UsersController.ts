import UserService from "../services/UserService.js";
import express from 'express'

class UsersController{
    static async login(req, res) {
        const userService : UserService = new UserService();
        res.header('Access-Control-Allow-Origin', '*')
        const loginResult = await userService.login(req.body.Username, req.body.Password)
        if(loginResult.Error === ""){
            const token = loginResult.DataToken
            res.setHeader('auth-token', token).json({
                error: null,
                data: {token}
            })
        }
        else
            return res.sendStatus(401);
    }

    static async add(req: express.Request, res: express.Response) {
        const userService : UserService = new UserService();
        res.header('Access-Control-Allow-Origin', '*')
        await userService.add(req.body)
        res.send("ok");
    }
}

export {UsersController}