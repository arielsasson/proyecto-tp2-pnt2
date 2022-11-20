import PlayoffService  from '../services/PlayoffService.js';

class PlayoffController{
    static async findAll(req, res) {
        debugger;
        const playoffService : PlayoffService = new PlayoffService();
        res.header('Access-Control-Allow-Origin', 'http://127.0.0.1:5173')
        res.send(await playoffService.findAll());
    }
}

export { PlayoffController }