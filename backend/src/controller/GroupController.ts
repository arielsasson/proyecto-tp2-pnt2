import GroupService  from '../services/GroupService.js';

class GroupController{
    static async findAll(req, res) {
        debugger;
        const groupService : GroupService = new GroupService();
        res.header('Access-Control-Allow-Origin', 'http://127.0.0.1:5173')
        res.send(await groupService.findAll());
    }
}

export { GroupController }