import PlayoffService  from '../services/PlayoffService.js';

class PlayoffController{
    static async findAll(req, res) {
        debugger;
        const playoffService : PlayoffService = new PlayoffService();
        res.send(await playoffService.findAll());
    }
}

export { PlayoffController }