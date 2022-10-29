import Team from '../models/Team';

class Group {
    Letter: string
    Teams: Array<Team>;

    constructor(
        Letter: string,
        Teams: Array<Team>) 
        {
        this.Teams = Teams;
        this.Letter = Letter;
    }
}


export default Group