import Group from "./Group.js"
import PlayoffResult from "./PlayoffResult.js"

class Prediction {

    Groups: Group[]
    Playoffs: PlayoffResult[]
    Date: Number
    
    constructor(
        groups: Group[],
        playoffs: PlayoffResult[],
        date: Number)
        {
        this.Groups = groups;
        this.Playoffs = playoffs;
        this.Date = date;
    }
}

export default Prediction