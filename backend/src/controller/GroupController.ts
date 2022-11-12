import GroupService  from '../services/GroupService.js';

class GroupController{
    static async findAll(req, res) {
        debugger;
        const groupService : GroupService = new GroupService();
        res.header('Access-Control-Allow-Origin', '*')
        console.log(res);
        res.send(await groupService.findAll());
    }
}

export {GroupController}