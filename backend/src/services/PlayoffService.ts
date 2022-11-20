import Playoff from '../models/Playoff.js';
import { PlayoffDaoMongoDb } from '../repository/PlayoffDaoMongoDb.js';

class PlayoffService {
    playoffDaoMongoDb : PlayoffDaoMongoDb = new PlayoffDaoMongoDb();

    async findAll()  : Promise<Playoff[]> {
        return await this.playoffDaoMongoDb.findAll();
    }
}

export default PlayoffService