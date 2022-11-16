import Group from "./Group.js"
import User from "./User.js"

class Prediction {

    Groups: Group[]
    
    constructor(groups: Group[]){
        this.Groups = groups; 
    }
}

export default Prediction