var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import UserService from "../services/UserService.js";
class UsersController {
    static login(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const userService = new UserService();
            res.header("Access-Control-Allow-Origin", "http://localhost:5173");
            const loginResult = yield userService.login(req.body.Username, req.body.Password);
            console.log(loginResult);
            if (loginResult.Error === "") {
                const token = loginResult.DataToken;
                res.setHeader("auth-token", token).json({
                    error: null,
                    data: { token },
                });
            }
            else
                return res.sendStatus(401);
        });
    }
    static add(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const userService = new UserService();
            res.header("Access-Control-Allow-Origin", "http://localhost:5173");
            yield userService.add(req.body);
            res.send("ok");
            const result = yield userService.add(req.body);
            result ? res.send("OK") : res.send("El usuario ya existe.");
        });
    }
    static get(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const userService = new UserService();
            const user = yield userService.get(req.params.username);
            res.send(user);
        });
    }
}
export { UsersController };
