import Group from "./Group.js"
import Playoff from "./Playoff.js"

class Prediction {

    Groups: Group[]
    Playoffs: Playoff[]
    
    constructor(
        groups: Group[],
        playoffs: Playoff[])
        {
        this.Groups = groups;
        this.Playoffs = playoffs;
    }
}

export default Prediction