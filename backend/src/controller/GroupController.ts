import GroupService  from '../services/GroupService.js';
 
class GroupController{
    static async findAll(req, res) {
        const groupService : GroupService = new GroupService();
        res.header("Access-Control-Allow-Origin", "*");
        res.send(await groupService.findAll());
    }
}

export {GroupController}