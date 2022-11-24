import Team from '../models/Team';

class PlayoffResult {
    Order: Number;
    Winner: Team;
    Loser: Team;

    constructor(
        Order: Number,
        Winner: Team,
        Loser: Team)
        {
        this.Order = Order;
        this.Winner = Winner;
        this.Loser = Loser;
    }
}


export default PlayoffResult