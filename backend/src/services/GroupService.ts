import Group from '../models/Group.js';
import { GroupDaoMongoDb } from '../repository/GroupDaoMongoDb.js';

class GroupService {
    groupDaoMongoDb : GroupDaoMongoDb = new GroupDaoMongoDb();

    async findAll()  : Promise<Group[]> {
        return  await this.groupDaoMongoDb.findAll();
    }
}

export default GroupService