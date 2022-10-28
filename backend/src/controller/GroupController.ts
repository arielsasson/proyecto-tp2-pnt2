import GroupService  from '../services/GroupService.js';
 
class GroupController{
    static async findAll(req, res) {
        const groupService : GroupService = new GroupService();
        res.send(await groupService.findAll());
    }
}

export {GroupController}