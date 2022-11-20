import Group from "./Group.js"
import PlayoffResult from "./PlayoffResult.js"

class Prediction {

    Groups: Group[]
    Playoffs: PlayoffResult[]
    
    constructor(
        groups: Group[],
        playoffs: PlayoffResult[])
        {
        this.Groups = groups;
        this.Playoffs = playoffs;
    }
}

export default Prediction