import UserService from "../services/UserService.js";
import express from "express";

class UsersController {
    static async login(req, res) {
        const userService: UserService = new UserService();
        res.header("Access-Control-Allow-Origin", "http://localhost:5173");
        const loginResult = await userService.login(
            req.body.Username,
            req.body.Password
        );
        console.log(loginResult)
        if (loginResult.Error === "") {
            const token = loginResult.DataToken;
            res.setHeader("auth-token", token).json({
                error: null,
                data: { token },
            });
        } else return res.sendStatus(401);
    }

    static async add(req: express.Request, res: express.Response) {
        const userService: UserService = new UserService();
        res.header("Access-Control-Allow-Origin", "http://localhost:5173");
        await userService.add(req.body);
        res.send("ok");
        const result = await userService.add(req.body);

        result ? res.send("OK") : res.send("El usuario ya existe.");
    }

    static async get(req: express.Request, res: express.Response) {
        const userService: UserService = new UserService();
        const user = await userService.get(req.params.username);
        res.send(user);
    }
}

export { UsersController };
