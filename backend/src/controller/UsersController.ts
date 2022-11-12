import UserService from "../services/UserService.js";
import express from 'express'

class UsersController{
    static async Login(req, res) {
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
}

export {UsersController}